// 问卷系统测试
// 这些测试应该在浏览器中运行

describe('Quiz System', () => {

    describe('Quiz Initialisation', () => {
        test('应该初始化问卷组件', () => {
            const quiz = new Quiz();
            expect(quiz).toBeDefined();
            expect(quiz.currentQuestion).toBe(0);
            expect(quiz.answers).toEqual({});
        });

        test('应该从localStorage加载之前的答案', () => {
            // 设置测试答案
            safeSetItem('claude_code_quiz_answers', JSON.stringify({
                'q1': 'C',
                'q2': 'B',
                'q4': 'A'
            }));

            const quiz = new Quiz();
            expect(quiz.answers.q1).toBe('C');
            expect(quiz.answers.q2).toBe('B');
            expect(quiz.answers.q4).toBe('A');

            // 清理
            safeRemoveItem('claude_code_quiz_answers');
        });
    });

    describe('Question Navigation', () => {
        test('应该正确显示当前题目', () => {
            const quiz = new Quiz();
            expect(quiz.getCurrentQuestion()).toBeDefined();
        });

        test('应该支持下一题导航', () => {
            const quiz = new Quiz();
            const beforeNext = quiz.currentQuestion;
            quiz.nextQuestion();
            expect(quiz.currentQuestion).toBe(beforeNext + 1);
        });

        test('应该支持上一题导航', () => {
            const quiz = new Quiz();
            quiz.nextQuestion(); // 先前进到第1题
            const beforePrev = quiz.currentQuestion;
            quiz.previousQuestion();
            expect(quiz.currentQuestion).toBe(beforePrev - 1);
        });

        test('应该阻止超出边界', () => {
            const quiz = new Quiz();

            // 尝试后退到第0题之前
            quiz.previousQuestion();
            expect(quiz.currentQuestion).toBe(0);

            // 前进到最后
            for (let i = 0; i < quiz.questions.length; i++) {
                quiz.nextQuestion();
            }
            expect(quiz.currentQuestion).toBe(quiz.questions.length - 1);
        });
    });

    describe('Answer Handling', () => {
        test('应该记录单选答案', () => {
            const quiz = new Quiz();
            quiz.recordAnswer('q1', 'C');
            expect(quiz.answers.q1).toBe('C');
        });

        test('应该记录多选答案', () => {
            const quiz = new Quiz();
            quiz.recordAnswer('q3', ['chatgpt', 'cursor']);
            expect(quiz.answers.q3).toEqual(['chatgpt', 'cursor']);
        });

        test('应该保存答案到localStorage', () => {
            const quiz = new Quiz();
            quiz.recordAnswer('q1', 'C');

            const saved = JSON.parse(safeGetItem('claude_code_quiz_answers', '{}'));
            expect(saved.q1).toBe('C');

            // 清理
            safeRemoveItem('claude_code_quiz_answers');
        });
    });

    describe('Progress Tracking', () => {
        test('应该正确计算答题进度', () => {
            const quiz = new Quiz();
            quiz.recordAnswer('q1', 'C');
            quiz.recordAnswer('q2', 'B');

            const progress = quiz.getProgress();
            expect(progress.answered).toBe(2);
            expect(progress.total).toBe(quiz.questions.length);
        });

        test('应该检测问卷完成', () => {
            const quiz = new Quiz();

            // 回答所有题目
            quiz.questions.forEach((q, index) => {
                quiz.recordAnswer(q.id, 'A');
            });

            expect(quiz.isCompleted()).toBe(true);
        });
    });

    describe('Learning Path Generation', () => {
        test('应该根据终端熟练经验推荐模块2', () => {
            const quiz = new Quiz();
            quiz.answers = {
                'q1': 'C', // 终尔用
                'q2': 'A'  // 从来没用过
            };

            const path = quiz.generateLearningPath();
            expect(path.startModule).toBe('2');
            expect(path.recommendations).toContain('模块2中关于终端的基础介绍你可以快速浏览');
        });

        test('应该根据编程经验推荐模块1', () => {
            const quiz = new Quiz();
            quiz.answers = {
                'q1': 'B', // 基本不会用
                'q2': 'C'  // 会编程
            };

            const path = quiz.generateLearningPath();
            expect(path.startModule).toBe('1');
            expect(path.recommendations).toContain('模块1中的基础介绍你可以快速浏览');
        });

        test('应该根据Claude Code经验推荐模块4', () => {
            const quiz = new Quiz();
            quiz.answers = {
                'q3': ['claude-code', 'terminal-ai'] // 用过Claude Code
            };

            const path = quiz.generateLearningPath();
            expect(path.startModule).toBe('4');
            expect(path.optionalModules).toContain('1');
            expect(path.optionalModules).toContain('2');
            expect(path.optionalModules).toContain('3');
        });

        test('应该根据操作系统设置平台偏好', () => {
            const quiz = new Quiz();
            quiz.answers = {
                'q4': 'A' // Windows
            };

            const path = quiz.generateLearningPath();

            // 检查平台是否被设置
            const platform = safeGetItem('claude_code_selected_platform', 'mac');
            expect(platform).toBe('windows');

            // 清理
            safeRemoveItem('claude_code_selected_platform');
        });

        test('应该处理多选题Q3不选择任何选项的情况', () => {
            const quiz = new Quiz();
            quiz.answers = {
                'q3': [] // 空数组
            };

            const path = quiz.generateLearningPath();
            expect(path.startModule).toBe('1'); // 默认从模块1开始
            expect(path.recommendations).toContain('建议从模块1开始，按顺序学习');
        });
    });

    describe('UI States', () => {
        test('应该正确切换引导式模式', () => {
            const quiz = new Quiz();
            expect(quiz.isGuidedMode).toBe(true);
        });

        test('应该显示进度指示器', () => {
            const quiz = new Quiz();
            quiz.recordAnswer('q1', 'C');

            const progress = quiz.getProgress();
            expect(progress.percentage).toBeGreaterThan(0);
            expect(progress.percentage).toBeLessThanOrEqual(100);
        });

        test('应该显示结果卡片', () => {
            const quiz = new Quiz();

            // 回答所有题目
            quiz.questions.forEach(q => {
                quiz.recordAnswer(q.id, 'A');
            });

            expect(quiz.showResults).toBe(true);
        });
    });
});

// 简单的测试运行器
function runQuizTests() {
    console.log('📝 开始运行问卷系统测试...');

    let passed = 0;
    let failed = 0;

    // 测试1: 问卷初始化
    try {
        const quiz = new Quiz();
        if (quiz && typeof quiz.nextQuestion === 'function') {
            console.log('✓ 问卷初始化正常');
            passed++;
        } else {
            console.log('✗ 问卷初始化失败');
            failed++;
        }
    } catch (error) {
        console.log('✗ 问卷初始化异常:', error.message);
        failed++;
    }

    // 测试2: 答题进度
    try {
        const quiz = new Quiz();
        quiz.recordAnswer('q1', 'C');
        const progress = quiz.getProgress();
        if (progress.answered === 1 && progress.total === 5) {
            console.log('✓ 答题进度计算正常');
            passed++;
        } else {
            console.log('✗ 答题进度计算错误');
            failed++;
        }
    } catch (error) {
        console.log('✗ 答题进度测试异常:', error.message);
        failed++;
    }

    // 测试3: 学习路径生成
    try {
        const quiz = new Quiz();
        quiz.answers = {
            'q1': 'C',
            'q2': 'C',
            'q4': 'A'
        };
        const path = quiz.generateLearningPath();
        if (path && path.startModule) {
            console.log('✓ 学习路径生成正常');
            passed++;
        } else {
            console.log('✗ 学习路径生成失败');
            failed++;
        }
    } catch (error) {
        console.log('✗ 学习路径生成测试异常:', error.message);
        failed++;
    }

    // 测试4: localStorage存储
    try {
        const quiz = new Quiz();
        quiz.recordAnswer('q1', 'C');
        const saved = JSON.parse(safeGetItem('claude_code_quiz_answers', '{}'));
        if (saved.q1 === 'C') {
            console.log('✓ localStorage存储正常');
            passed++;
        } else {
            console.log('✗ localStorage存储失败');
            failed++;
        }
        // 清理
        safeRemoveItem('claude_code_quiz_answers');
    } catch (error) {
        console.log('✗ localStorage存储测试异常:', error.message);
        failed++;
    }

    console.log(`\n📊 测试结果: ${passed} 通过, ${failed} 失败`);
    return failed === 0;
}