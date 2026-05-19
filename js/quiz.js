// 诊断问卷系统
class Quiz {
    constructor() {
        // 问卷题目定义
        this.questions = [
            {
                id: 'q1',
                question: '你用过电脑的"终端"或"命令行"吗？（就是那个黑色命令行窗口）',
                options: [
                    { value: 'A', label: '从来没用过，不知道怎么打开' },
                    { value: 'B', label: '打开过，但基本不会用' },
                    { value: 'C', label: '偶尔用，会输入一些基本命令' },
                    { value: 'D', label: '经常用，很熟悉' }
                ],
                type: 'single'
            },
            {
                id: 'q2',
                question: '你有没有写过代码？',
                options: [
                    { value: 'A', label: '完全没有，代码对我来说是外星语' },
                    { value: 'B', label: '复制粘贴过别人的代码，改过一点点' },
                    { value: 'C', label: '学过基础，能写简单程序' },
                    { value: 'D', label: '会编程，这是我的日常工作' }
                ],
                type: 'single'
            },
            {
                id: 'q3',
                question: '你之前用过哪类AI工具？（可多选，不选也可以）',
                options: [
                    { value: 'chatgpt', label: 'ChatGPT / Claude / 豆包等聊天AI' },
                    { value: 'cursor', label: 'Cursor / Copilot / Windsurf 等AI写代码工具' },
                    { value: 'claude-code', label: '用过Claude Code或类似终端AI工具' },
                    { value: 'none', label: '没有用过任何AI工具' }
                ],
                type: 'multiple'
            },
            {
                id: 'q4',
                question: '你的操作系统是？',
                options: [
                    { value: 'A', label: 'Windows' },
                    { value: 'B', label: 'Mac' },
                    { value: 'C', label: 'Linux' }
                ],
                type: 'single'
            },
            {
                id: 'q5',
                question: '你学Claude Code主要想干什么？',
                options: [
                    { value: 'A', label: '做个人项目或自己的小工具' },
                    { value: 'B', label: '提升工作效率，不想学太深' },
                    { value: 'C', label: '想认真学编程或开发' },
                    { value: 'D', label: '纯属好奇，先看看是什么' }
                ],
                type: 'single'
            }
        ];

        this.currentQuestion = 0;
        this.answers = {};
        this.isCompleted = false;

        try {
            this.init();
        } catch (error) {
            console.error('问卷初始化失败，使用默认状态:', error);
            this.answers = {};
            this.currentQuestion = 0;
            this.isCompleted = false;
            safeRemoveItem('claude_code_quiz_answers');
            this.render();
        }
    }

    // 初始化
    init() {
        this.loadAnswers();
        this.calculateStartingQuestion();
        // 安全检查：防止currentQuestion越界导致渲染出"undefined"
        if (!this.isCompleted && (this.currentQuestion < 0 || this.currentQuestion >= this.questions.length)) {
            console.warn('问卷状态异常，自动重置');
            this.answers = {};
            this.currentQuestion = 0;
            this.isCompleted = false;
            safeRemoveItem('claude_code_quiz_answers');
        }
        this.render();
        this.initEventListeners();
        this.renderProgressBar();
    }

    // 加载之前答案
    loadAnswers() {
        const savedAnswers = safeGetItem('claude_code_quiz_answers', '{}');
        try {
            this.answers = JSON.parse(savedAnswers);
        } catch (error) {
            console.warn('解析问卷答案失败，使用默认值:', error);
            this.answers = {};
        }

        // 计算当前进度
        const answeredCount = Object.keys(this.answers).filter(key => {
            const answer = this.answers[key];
            // 对于多选题，检查是否为非空数组
            if (Array.isArray(answer)) {
                return answer.length > 0;
            }
            return answer !== null && answer !== undefined && answer !== '';
        }).length;

        this.currentQuestion = answeredCount;
        this.isCompleted = answeredCount === this.questions.length;
    }

    // 计算起始题目（支持中途恢复）
    calculateStartingQuestion() {
        // 找到第一个未回答的题目
        for (let i = 0; i < this.questions.length; i++) {
            const question = this.questions[i];
            const answer = this.answers[question.id];

            let isAnswered = false;
            if (question.type === 'multiple') {
                isAnswered = Array.isArray(answer) && answer.length > 0;
            } else {
                isAnswered = answer !== null && answer !== undefined && answer !== '';
            }

            if (!isAnswered) {
                this.currentQuestion = i;
                return;
            }
        }

        // 如果所有题目都已回答，显示结果
        if (this.currentQuestion >= this.questions.length) {
            this.isCompleted = true;
        }
    }

    // 渲染问卷界面
    render() {
        const container = document.getElementById('quiz-container');
        if (!container) {
            console.error('Quiz container not found!');
            return;
        }

        // Update container classes to remove loading state classes
        container.className = 'px-6 py-10';

        if (this.isCompleted) {
            container.innerHTML = this.renderResults();
            return;
        }

        const currentQuestion = this.questions[this.currentQuestion];
        // 防御：如果题目数据异常，自动重置问卷
        if (!currentQuestion || !currentQuestion.question) {
            console.warn('题目数据异常，自动重置');
            this.answers = {};
            this.currentQuestion = 0;
            this.isCompleted = false;
            safeRemoveItem('claude_code_quiz_answers');
            this.render();
            return;
        }

        const html = `
            <div class="quiz-container max-w-3xl mx-auto px-6 py-10">
                <!-- 进度指示器 -->
                <div class="quiz-progress mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-600">答题进度</span>
                        <span class="text-sm font-bold text-orange-600">
                            第 ${this.currentQuestion + 1} 题 / 共 ${this.questions.length} 题
                        </span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-orange-500 rounded-full transition-all duration-500"
                             style="width: ${((this.currentQuestion + 1) / this.questions.length) * 100}%"></div>
                    </div>
                </div>

                <!-- 当前题目 -->
                <div class="question-card bg-white rounded-xl shadow-lg p-8 mb-6 transition-all duration-300">
                    <div class="question-content">
                        <h2 class="text-xl font-bold mb-6 text-gray-900">
                            ${currentQuestion.question}
                        </h2>
                        <div class="options-container space-y-3">
                            ${this.renderOptions(currentQuestion)}
                        </div>
                    </div>
                </div>

                <!-- 导航按钮 -->
                <div class="quiz-navigation flex justify-between items-center">
                    <button id="prev-question-btn"
                            class="px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                                this.currentQuestion === 0
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }"
                            ${this.currentQuestion === 0 ? 'disabled' : ''}>
                        ← 上一题
                    </button>

                    <button id="next-question-btn"
                            class="px-8 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg shadow-md transition-all duration-200 min-h-[44px] min-w-[120px]"
                            ${this.currentQuestion >= this.questions.length ? 'disabled' : ''}>
                        ${this.currentQuestion >= this.questions.length - 1 ? '查看结果 →' : '下一题 →'}
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.bindQuestionEvents();
        this.updateQuestionAnimation();
    }

    // 渲染选项
    renderOptions(question) {
        return question.options.map((option, index) => {
            const isSelected = this.isOptionSelected(question.id, option.value);
            const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';

            return `
                <div class="quiz-option ${isSelected ? 'selected' : ''}
                            p-4 border-2 rounded-lg cursor-pointer transition-all duration-200
                            ${isSelected
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'}"
                          data-question-id="${question.id}"
                          data-option-value="${option.value}">
                    <label class="flex items-center cursor-pointer w-full">
                        <input type="${inputType}"
                               name="${question.id}"
                               value="${option.value}"
                               ${isSelected ? 'checked' : ''}
                               class="w-5 h-5 text-orange-600 cursor-pointer">
                        <span class="ml-3 text-gray-700 cursor-pointer">${option.label}</span>
                    </label>
                </div>
            `;
        }).join('');
    }

    // 检查选项是否被选中
    isOptionSelected(questionId, optionValue) {
        const answer = this.answers[questionId];
        if (this.questions.find(q => q.id === questionId)?.type === 'multiple') {
            return Array.isArray(answer) && answer.includes(optionValue);
        }
        return answer === optionValue;
    }

    // 绑定题目事件
    bindQuestionEvents() {
        // 选项点击事件
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const questionId = e.currentTarget.getAttribute('data-question-id');
                const optionValue = e.currentTarget.getAttribute('data-option-value');
                this.handleOptionClick(questionId, optionValue);
            });
        });

        // 导航按钮事件
        const prevBtn = document.getElementById('prev-question-btn');
        const nextBtn = document.getElementById('next-question-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousQuestion());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
    }

    // 处理选项点击
    handleOptionClick(questionId, optionValue) {
        const question = this.questions.find(q => q.id === questionId);
        if (!question) return;

        if (question.type === 'multiple') {
            // 多选逻辑
            if (!Array.isArray(this.answers[questionId])) {
                this.answers[questionId] = [];
            }

            const index = this.answers[questionId].indexOf(optionValue);
            if (index === -1) {
                this.answers[questionId].push(optionValue);
            } else {
                this.answers[questionId].splice(index, 1);
            }

            // 如果所有选项都被取消选择，清空答案
            if (this.answers[questionId].length === 0) {
                delete this.answers[questionId];
            }
        } else {
            // 单选逻辑
            this.answers[questionId] = optionValue;
        }

        // 更新UI
        this.updateOptionSelection(questionId);
    }

    // 更新选项选中状态
    updateOptionSelection(questionId) {
        const options = document.querySelectorAll(`[data-question-id="${questionId}"]`);
        const question = this.questions.find(q => q.id === questionId);

        options.forEach(option => {
            const optionValue = option.getAttribute('data-option-value');
            const isSelected = this.isOptionSelected(questionId, optionValue);

            // 更新输入框状态
            const input = option.querySelector('input');
            if (input) {
                input.checked = isSelected;
            }

            // 更新容器样式
            if (isSelected) {
                option.classList.add('selected');
                option.classList.remove('border-gray-200', 'hover:border-orange-300', 'hover:bg-gray-50');
                option.classList.add('border-orange-500', 'bg-orange-50');
            } else {
                option.classList.remove('selected');
                option.classList.remove('border-orange-500', 'bg-orange-50');
                option.classList.add('border-gray-200', 'hover:border-orange-300', 'hover:bg-gray-50');
            }
        });
    }

    // 更新题目动画
    updateQuestionAnimation() {
        const questionCard = document.querySelector('.question-card');
        if (questionCard) {
            // 移除动画类重新触发
            questionCard.classList.remove('fade-in');
            void questionCard.offsetWidth; // 触发重排
            questionCard.classList.add('fade-in');
        }
    }

    // 下一题
    nextQuestion() {
        // 验证多选题是否至少选择一个选项
        if (this.currentQuestion < this.questions.length - 1) {
            const currentQuestion = this.questions[this.currentQuestion];

            // 如果是多选题且没有选择任何选项，显示提示
            if (currentQuestion.type === 'multiple') {
                const answer = this.answers[currentQuestion.id];
                const hasSelection = Array.isArray(answer) && answer.length > 0;

                if (!hasSelection) {
                    // 显示友好的提示
                    this.showToast('请至少选择一个选项，或者可以跳过此题');
                    return;
                }
            }
        }

        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.saveAnswers();
            this.render();
            this.renderProgressBar();
        } else {
            // 完成问卷
            this.completeQuiz();
        }
    }

    // 显示提示消息
    showToast(message) {
        // 创建toast提示元素
        const existingToast = document.querySelector('.quiz-toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'quiz-toast fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
        toast.style.marginLeft = '-50%';
        toast.innerHTML = `
            <div class="flex items-center gap-2">
              <span class="text-xl">⚠️</span>
              <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        // 3秒后自动消失
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // 上一题
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.saveAnswers();
            this.render();
            this.renderProgressBar();
        }
    }

    // 保存答案
    saveAnswers() {
        safeSetItem('claude_code_quiz_answers', JSON.stringify(this.answers));
    }

    // 渲染进度条
    renderProgressBar() {
        const progressContainer = document.getElementById('quiz-progress-container');
        if (!progressContainer) return;

        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        progressContainer.innerHTML = `
            <div class="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
                <div class="max-w-3xl mx-auto px-4 py-2">
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-600">问卷进度</span>
                        <span class="font-medium text-orange-600">${Math.round(progress)}%</span>
                    </div>
                    <div class="h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                        <div class="h-full bg-orange-500 rounded-full transition-all duration-300"
                             style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 完成问卷
    completeQuiz() {
        this.isCompleted = true;
        this.saveAnswers();

        // 生成学习路径
        const learningPath = this.generateLearningPath();

        // 保存学习路径
        safeSetItem('claude_code_learning_path', JSON.stringify(learningPath));

        // 设置平台偏好
        if (this.answers.q4) {
            const platformMap = {
                'A': 'windows',
                'B': 'mac',
                'C': 'mac' // Linux默认为Mac
            };
            const platform = platformMap[this.answers.q4];
            safeSetItem('claude_code_selected_platform', platform);
        }

        // 显示结果
        this.renderResults();
    }

    // 生成学习路径
    generateLearningPath() {
        let startModule = '1';
        let recommendText = '建议从模块1开始，按顺序学习每个模块。';
        let optionalModules = [];

        const q1Answer = this.answers.q1;
        const q2Answer = this.answers.q2;
        const q3Answer = this.answers.q3;

        // Q1: 终端使用经验
        if (q1Answer === 'C' || q1Answer === 'D') {
            recommendText += ' 模块2中关于终端的基础介绍你可以快速浏览。';
            startModule = '2';
        }

        // Q2: 编程经验
        if (q2Answer === 'C' || q2Answer === 'D') {
            recommendText += ' 模块1中的基础介绍你可以快速浏览。';
            startModule = '1';
        }

        // Q3: Claude Code经验
        if (Array.isArray(q3Answer) && q3Answer.includes('claude-code')) {
            startModule = '4';
            optionalModules = ['1', '2', '3'];
            recommendText = `你有过Claude Code经验，可以直接从模块4开始学习！模块1、2、3标为可选回顾。`;
        }

        return {
            startModule: startModule,
            recommendations: recommendText,
            optionalModules: optionalModules
        };
    }

    // 渲染结果页面
    renderResults() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        const learningPath = this.generateLearningPath();
        const html = `
            <div class="quiz-results max-w-3xl mx-auto px-6 py-10">
                <!-- 结果卡片 -->
                <div class="result-card bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
                    <div class="text-center mb-6">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                            <span class="text-3xl">🎉</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">诊断完成！</h2>
                        <p class="text-gray-600">根据你的回答，我们为你定制了学习路径</p>
                    </div>

                    <div class="learning-path bg-blue-50 rounded-lg p-6 mb-6">
                        <h3 class="text-lg font-bold text-blue-800 mb-4">🎯 你的学习路径</h3>
                        <div class="space-y-3 text-blue-700">
                            <p><strong>推荐开始模块：</strong>模块${learningPath.startModule}</p>
                            <p><strong>个性化建议：</strong>${learningPath.recommendations}</p>
                            ${learningPath.optionalModules.length > 0 ?
                                `<p><strong>可选回顾模块：</strong>${learningPath.optionalModules.map(m => `模块${m}`).join('、')}</p>` :
                                ''}
                        </div>
                    </div>

                    <div class="action-buttons text-center">
                        <button onclick="window.location.href='learn.html#${learningPath.startModule}'"
                                class="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-md transition-all duration-200 min-h-[48px] min-w-[200px]">
                            🚀 开始学习 →
                        </button>
                    </div>
                </div>

                <!-- 重测按钮 -->
                <div class="text-center">
                    <button onclick="quiz.resetQuiz()"
                            class="text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors">
                        🔄 重新测试
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    // 重置问卷
    resetQuiz() {
        this.answers = {};
        this.currentQuestion = 0;
        this.isCompleted = false;
        safeRemoveItem('claude_code_quiz_answers');
        this.render();
        this.renderProgressBar();
    }

    // 初始化事件监听
    initEventListeners() {
        // 已经在render()中绑定了事件
    }
}

// 导出供其他文件使用
window.Quiz = Quiz;