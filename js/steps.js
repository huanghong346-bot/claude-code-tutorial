// 引导式步骤组件
class StepViewer {
    constructor(containerId, steps, quizHtml = '', moduleId = 'test', options = {}) {
        this.container = document.getElementById(containerId);
        this.steps = steps;
        this.quizHtml = quizHtml;
        this.moduleId = moduleId;
        this.currentStep = 0;

        // options: { nextModuleId, onAfterQuizRendered }
        this.nextModuleId = options.nextModuleId || '2';
        this.onAfterQuizRendered = options.onAfterQuizRendered || null;

        this.localStorageKey = `claude_code_module_${moduleId}_progress`;

        this.init();
    }

    // 初始化
    init() {
        // 从 localStorage 读取进度（使用安全函数）
        const savedProgress = safeGetItem(this.localStorageKey, '0');

        // 验证并解析进度数据
        if (savedProgress !== null) {
            const progress = parseInt(savedProgress);
            // 验证数据有效性：必须是数字，在有效范围内
            if (!isNaN(progress) && progress >= 0 && progress <= this.steps.length) {
                this.currentStep = progress;
            } else {
                console.warn(`无效的进度数据: ${savedProgress}，重置为0`);
                this.currentStep = 0;
            }
        } else {
            this.currentStep = 0;
        }

        // 渲染已读的步骤
        this.renderAllSteps();

        // 渲染进度条
        this.renderProgressBar();

        // 如果所有步骤都已读完，显示测验区域
        if (this.currentStep >= this.steps.length) {
            this.showQuizAndNextModule();
        }
    }

    // 渲染所有步骤（根据进度）
    renderAllSteps() {
        let html = '';

        for (let i = 0; i < this.currentStep; i++) {
            html += this.renderStep(i, false);
        }

        // 显示当前步骤（如果还有未读的）
        if (this.currentStep < this.steps.length) {
            html += this.renderStep(this.currentStep, true);
            html += this.renderContinueButton();
        }

        this.container.innerHTML = html;

        // 为新出现的步骤添加动画类
        const currentStep = this.container.querySelector(`[data-step="${this.currentStep}"]`);
        if (currentStep) {
            currentStep.classList.add('step-new');
            // 动画结束后移除类
            setTimeout(() => {
                currentStep.classList.remove('step-new');
            }, 600);
        }

        // 为"继续"按钮添加事件监听
        const continueBtn = this.container.querySelector('.step-continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.nextStep());
        }
    }

    // 渲染单个步骤
    renderStep(index, isCurrent) {
        const step = this.steps[index];
        const stepNumber = index + 1;
        const totalSteps = this.steps.length;

        return `
            <div class="step-block ${isCurrent ? 'step-current' : 'step-past'}" data-step="${index}">
                <div class="step-header mb-4">
                    <div class="flex items-center justify-between mb-2">
                        <span class="step-number text-sm font-medium text-orange-600">
                            第 ${stepNumber} 步 / 共 ${totalSteps} 步
                        </span>
                    </div>
                    <div class="step-progress-bar h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div class="step-progress-fill h-full bg-orange-500 rounded-full transition-all duration-500"
                             style="width: ${(stepNumber / totalSteps) * 100}%"></div>
                    </div>
                </div>

                <div class="step-content">
                    ${step.content}
                </div>

                ${isCurrent ? '<div class="step-separator my-6 border-t border-gray-200"></div>' : ''}
            </div>
        `;
    }

    // 渲染继续按钮
    renderContinueButton() {
        return `
            <div class="step-continue-wrapper text-center mb-8">
                <button class="step-continue-btn bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-200 min-h-[44px] min-w-[200px]">
                    我理解了，继续 →
                </button>
            </div>
        `;
    }

    // 渲染全局进度条（页面顶部）
    renderProgressBar() {
        const progressContainer = document.querySelector('#step-progress-container');
        if (progressContainer) {
            const progress = (this.currentStep / this.steps.length) * 100;
            progressContainer.innerHTML = `
                <div class="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
                    <div class="max-w-4xl mx-auto px-4 py-2">
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-gray-600">学习进度</span>
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
    }

    // 显示测验区域和下一模块按钮
    showQuizAndNextModule() {
        // 使用 onAfterQuizRendered 回调时，由外部模块完全控制渲染
        if (this.onAfterQuizRendered) {
            const quizAreaId = 'lq-area-' + this.moduleId;
            const nextBtnId = 'lq-next-btn-' + this.moduleId;

            const wrapper = document.createElement('div');
            wrapper.className = 'module-end-section';
            wrapper.innerHTML = `
                <div class="quiz-section mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h3 class="text-lg font-bold mb-6 text-blue-800">🎯 随堂小测验（选一选，看看你掌握了吗？）</h3>
                    <div id="${quizAreaId}"></div>
                </div>

                <div id="${nextBtnId}" class="text-center mt-6" style="display:none">
                    <button class="lq-next-module-btn bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-10 py-4 rounded-xl shadow-md transition-all duration-200 min-h-[52px] min-w-[220px] text-base">
                        👉 进入下一模块 →
                    </button>
                </div>

                <div class="ad-slot-banner mt-8 flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 text-sm" style="height:90px">
                    <!-- 在此处替换为广告联盟代码 -->
                </div>

                <div class="mt-4 mb-10 text-center">
                    <button class="lq-donation-btn text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
                        ☕ 如果这个教程帮到了你，请作者喝杯咖啡
                    </button>
                </div>
            `;
            this.container.appendChild(wrapper);

            // 绑定"进入下一模块"按钮
            const nextBtn = wrapper.querySelector('.lq-next-module-btn');
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    if (typeof app !== 'undefined' && app) {
                        app.markModuleCompleted(this.moduleId);
                        app.navigateToModule(this.nextModuleId);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            }

            // 绑定打赏按钮
            const donationBtn = wrapper.querySelector('.lq-donation-btn');
            if (donationBtn) {
                donationBtn.addEventListener('click', () => {
                    var dm = new RatingModal(null, function() {});
                    dm.show();
                });
            }

            // 触发回调（外部初始化 LessonQuiz）
            this.onAfterQuizRendered(quizAreaId, nextBtnId);
            return;
        }

        // 默认行为（无回调时，显示静态内容）
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="quiz-section mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 class="text-lg font-bold mb-4 text-blue-800">📝 小测验</h3>
                ${this.quizHtml || '<p class="text-gray-600">测验区域</p>'}
            </div>
            <div class="text-center mt-8">
                <button class="next-module-btn bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-200 min-h-[44px] min-w-[200px]">
                    进入下一模块 →
                </button>
            </div>
        `;
        this.container.appendChild(wrapper);
    }

    // 外部调用：显示"进入下一模块"按钮
    showNextModuleButton(nextBtnId) {
        const id = nextBtnId || ('lq-next-btn-' + this.moduleId);
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'block';
            setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }

    // 下一步
    nextStep() {
        // 防止快速连点
        const btn = this.container.querySelector('.step-continue-btn');
        if (btn) {
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        }

        // 更新进度
        this.currentStep++;

        // 保存到 localStorage（使用安全函数）
        safeSetItem(this.localStorageKey, this.currentStep.toString());

        // 重新渲染
        this.renderAllSteps();
        this.renderProgressBar();

        // 如果完成所有步骤，显示测验区域
        if (this.currentStep >= this.steps.length) {
            this.showQuizAndNextModule();
        } else {
            // 滚动到新出现的步骤
            const newStep = this.container.querySelector(`[data-step="${this.currentStep}"]`);
            if (newStep) {
                newStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // 重置进度
    resetProgress() {
        safeRemoveItem(this.localStorageKey);
        this.currentStep = 0;
        this.renderAllSteps();
        this.renderProgressBar();
    }
}

// 导出供其他文件使用
window.StepViewer = StepViewer;