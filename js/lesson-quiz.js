// 随堂小测验组件（用于各学习模块）
class LessonQuiz {
    constructor(containerId, moduleId, questions, onAllAnswered) {
        this.containerId = containerId;
        this.moduleId = moduleId;
        this.questions = questions; // [{question, options:[{text}], correct(index), successMsg, explanation}]
        this.onAllAnswered = onAllAnswered || null;
        this.answers = {}; // {questionIndex: selectedOptionIndex}
        this.storageKey = 'claude_code_lesson_quiz_' + moduleId;
        this.init();
    }

    init() {
        this.loadState();
        this.render();
        if (this.allAnswered()) {
            // 已全部回答过，立即触发回调
            if (this.onAllAnswered) {
                setTimeout(() => this.onAllAnswered(), 0);
            }
        }
    }

    loadState() {
        const saved = safeGetItem(this.storageKey, 'null');
        if (saved && saved !== 'null') {
            try {
                this.answers = JSON.parse(saved);
            } catch (e) {
                this.answers = {};
            }
        }
    }

    saveState() {
        safeSetItem(this.storageKey, JSON.stringify(this.answers));
    }

    allAnswered() {
        return Object.keys(this.answers).length >= this.questions.length;
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const questionsHtml = this.questions.map((q, i) => this.renderQuestion(q, i)).join('');
        container.innerHTML = questionsHtml;
        this.bindEvents();
    }

    renderQuestion(q, index) {
        const answered = this.answers[index] !== undefined;
        const selectedIndex = this.answers[index];
        const letters = ['A', 'B', 'C', 'D'];

        const optionsHtml = q.options.map((opt, oi) => {
            const letter = letters[oi];
            const isSelected = answered && selectedIndex === oi;
            const isCorrect = oi === q.correct;

            let cls = 'lq-opt flex items-center gap-3 p-3 border-2 rounded-lg transition-all ';
            if (answered) {
                if (isSelected && isCorrect) {
                    cls += 'border-green-500 bg-green-50 cursor-default';
                } else if (isSelected && !isCorrect) {
                    cls += 'border-red-400 bg-red-50 cursor-default';
                } else if (!isSelected && isCorrect) {
                    cls += 'border-green-300 bg-green-50 opacity-75 cursor-default';
                } else {
                    cls += 'border-gray-200 bg-gray-50 opacity-40 cursor-default';
                }
            } else {
                cls += 'border-gray-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer';
            }

            let badgeCls = 'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ';
            if (answered && isSelected && isCorrect) {
                badgeCls += 'bg-green-500 text-white border-green-500';
            } else if (answered && isSelected && !isCorrect) {
                badgeCls += 'bg-red-400 text-white border-red-400';
            } else if (answered && !isSelected && isCorrect) {
                badgeCls += 'bg-green-400 text-white border-green-400';
            } else {
                badgeCls += 'bg-white text-gray-500 border-gray-300';
            }

            const dataAttr = answered ? '' : `data-q="${index}" data-opt="${oi}"`;
            return `
                <div class="${cls}" ${dataAttr}>
                    <span class="${badgeCls}">${letter}</span>
                    <span class="text-sm text-gray-700 leading-relaxed">${opt.text}</span>
                </div>
            `;
        }).join('');

        let feedbackHtml = '';
        if (answered) {
            const isCorrect = selectedIndex === q.correct;
            if (isCorrect) {
                feedbackHtml = `
                    <div class="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
                        <span class="text-green-600 text-lg font-bold flex-shrink-0">✓</span>
                        <span class="text-green-700 text-sm">${q.successMsg || '回答正确！继续保持！🎉'}</span>
                    </div>`;
            } else {
                const correctLetter = letters[q.correct];
                feedbackHtml = `
                    <div class="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                        <span class="text-red-500 text-lg font-bold flex-shrink-0">✗</span>
                        <div class="text-sm">
                            <span class="text-red-700">回答有误。正确答案是 <strong>${correctLetter}</strong>。</span>
                            ${q.explanation ? `<span class="block mt-1 text-gray-600">${q.explanation}</span>` : ''}
                        </div>
                    </div>`;
            }
        }

        return `
            <div class="lq-question mb-6" data-question-block="${index}">
                <p class="font-medium text-gray-800 mb-3 text-sm leading-relaxed">
                    <span class="inline-block bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded mr-1 text-xs">第${index + 1}题</span>
                    ${q.question}
                </p>
                <div class="space-y-2">
                    ${optionsHtml}
                </div>
                ${feedbackHtml}
            </div>
        `;
    }

    bindEvents() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.querySelectorAll('.lq-opt[data-q]').forEach(el => {
            el.addEventListener('click', () => {
                const qi = parseInt(el.getAttribute('data-q'));
                const oi = parseInt(el.getAttribute('data-opt'));
                this.answer(qi, oi);
            });
        });
    }

    answer(questionIndex, optionIndex) {
        if (this.answers[questionIndex] !== undefined) return;
        this.answers[questionIndex] = optionIndex;
        this.saveState();
        this.render();

        if (this.allAnswered()) {
            if (this.onAllAnswered) {
                setTimeout(() => this.onAllAnswered(), 200);
            }
        }
    }
}

// 打赏弹窗（全局单例）
const DonationModal = {
    show() {
        let modal = document.getElementById('donation-modal-global');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'donation-modal-global';
            modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50';
            modal.innerHTML = `
                <div class="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                    <button id="donation-modal-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none w-8 h-8 flex items-center justify-center">&times;</button>
                    <h3 class="text-xl font-bold text-gray-900 mb-1 text-center">☕ 请作者喝杯咖啡</h3>
                    <p class="text-sm text-gray-500 text-center mb-6">你的支持是持续创作的最大动力！</p>
                    <div class="flex gap-6 justify-center">
                        <div class="text-center">
                            <div class="w-36 h-36 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center mb-2">
                                <span class="text-gray-400 text-xs text-center px-3 leading-relaxed">微信收款码<br/>占位图</span>
                            </div>
                            <span class="text-xs text-gray-500">微信支付</span>
                        </div>
                        <div class="text-center">
                            <div class="w-36 h-36 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center mb-2">
                                <span class="text-gray-400 text-xs text-center px-3 leading-relaxed">支付宝收款码<br/>占位图</span>
                            </div>
                            <span class="text-xs text-gray-500">支付宝</span>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('donation-modal-close').addEventListener('click', () => DonationModal.hide());
            modal.addEventListener('click', e => { if (e.target === modal) DonationModal.hide(); });
        } else {
            modal.style.display = 'flex';
        }
    },

    hide() {
        const modal = document.getElementById('donation-modal-global');
        if (modal) modal.style.display = 'none';
    }
};

window.LessonQuiz = LessonQuiz;
window.DonationModal = DonationModal;
