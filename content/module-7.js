// 模块7：常用命令和快捷键速查
var MODULE_7 = {
    id: '7',
    title: '命令速查',
    steps: [
        {
            content: '<div class="step-title">📌 第一部分：新手必学的 Slash 命令</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">Claude Code 有很多内置命令，一开始你完全不需要把它们全部记住。我们把它们分成了"新手必学"和"用熟了再看"两个层次，你先把新手层的记住就足够日常使用了。建议把这个页面<strong>收藏起来</strong>，当作随时翻阅的小字典！</p>' +
                '<p class="text-sm text-gray-600 mb-3">在底部的聊天框里输入这些带有 <code class="bg-gray-100 px-1 rounded text-xs">/</code> 的单词，就能直接指挥 Claude Code。</p>' +

                // Slash命令表格
                '<div class="ref-table-wrapper">' +
                '<table class="ref-table">' +
                '<thead><tr><th>命令</th><th>一句话说明</th><th>典型使用场景</th></tr></thead>' +
                '<tbody>' +
                '<tr><td class="cmd-col">/help</td><td>查看帮助手册</td><td>忘了命令有哪些、具体怎么拼写时。</td></tr>' +
                '<tr><td class="cmd-col">/status</td><td>查看当前运行状态</td><td>想看看自己目前连的是哪个AI模型（比如确认是否成功接上了智谱 GLM）。</td></tr>' +
                '<tr><td class="cmd-col">/clear</td><td>彻底清空并重新开始</td><td>刚做完了一个功能，准备换个完全无关的新任务时。</td></tr>' +
                '<tr><td class="cmd-col">/compact</td><td>浓缩当前的对话记录</td><td>聊了很久、感觉AI开始"忘事"，但当前任务还没做完需要继续时。</td></tr>' +
                '<tr><td class="cmd-col">/btw</td><td>快速问个临时小问题</td><td>突然想查个名词解释，又不想把正式的聊天记录搞乱时。</td></tr>' +
                '<tr><td class="cmd-col">/init</td><td>自动生成工作手册</td><td>刚开始一个新项目，想让它帮你写一份初始的 CLAUDE.md（项目规矩文件）时。</td></tr>' +
                '<tr><td class="cmd-col">/cost</td><td>查看消耗的额度/费用</td><td>想看看自己当前的对话花费了多少"流量（Token）"时。</td></tr>' +
                '<tr><td class="cmd-col">/review</td><td>让AI执行代码审查</td><td>写完一段代码后，想让它像资深程序员一样帮你检查有没有隐藏漏洞时。<br><span class="text-gray-500 text-xs">⚠️ /review 是进阶功能，消耗额度较多，新手了解即可，熟练后再用。</span></td></tr>' +
                '</tbody></table></div>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-3">' +
                '<p class="font-bold text-gray-800 mb-2">💡 重点命令使用示例：</p>' +
                '<div class="space-y-2 text-sm text-gray-700">' +
                '<p>🌰 <strong>/compact：</strong><code class="bg-gray-100 px-1 rounded text-xs">/compact 请重点保留我们关于登录功能的所有决定</code></p>' +
                '<p>🌰 <strong>/clear：</strong>直接输入 <code class="bg-gray-100 px-1 rounded text-xs">/clear</code>，然后按回车发送。</p>' +
                '<p>🌰 <strong>/btw：</strong><code class="bg-gray-100 px-1 rounded text-xs">/btw HTML和CSS有什么本质区别？</code></p>' +
                '<p>🌰 <strong>/cost：</strong>直接输入 <code class="bg-gray-100 px-1 rounded text-xs">/cost</code> 查看账单。</p>' +
                '</div></div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🛠 第二部分：用熟了再看的进阶命令</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">当你觉得基础功能已经不够用时，可以试试这些高级指令：</p>' +

                '<div class="ref-table-wrapper">' +
                '<table class="ref-table">' +
                '<thead><tr><th>命令</th><th>一句话说明</th></tr></thead>' +
                '<tbody>' +
                '<tr><td class="cmd-col">/config</td><td>打开设置面板，配置你的个性化偏好（如界面显示风格）。</td></tr>' +
                '<tr><td class="cmd-col">/mcp</td><td>管理外部工具连接，比如让 Claude 能操控你的浏览器、连接数据库等扩展功能。</td></tr>' +
                '<tr><td class="cmd-col">/doctor</td><td>诊断工具，当 Claude Code 连不上网或频繁报错时，用来给它"看病"排查问题。</td></tr>' +
                '<tr><td class="cmd-col">/bug</td><td>如果你发现了软件漏洞，用这个命令直接向官方报告问题。</td></tr>' +
                '</tbody></table></div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">⌨️ 第三部分：最常用的键盘快捷键</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">不用每次都用鼠标点，记住这几个按键能让你的操作快得飞起！</p>' +

                '<div class="ref-table-wrapper">' +
                '<table class="key-table">' +
                '<thead><tr><th>功能操作</th><th>Mac 快捷键</th><th>Windows 快捷键</th></tr></thead>' +
                '<tbody>' +
                '<tr><td>🛑 中断正在干活的 Claude</td><td>Esc</td><td>Esc</td></tr>' +
                '<tr><td>🔄 循环切换权限模式<br><span class="text-xs text-gray-500">（普通 / 自动接受 / 计划模式）</span></td><td>Shift + Tab</td><td>Shift + Tab</td></tr>' +
                '<tr><td>↵ 换行而不发送<br><span class="text-xs text-gray-500">（用于多行输入文字）</span></td><td>Shift + Enter</td><td>Shift + Enter</td></tr>' +
                '<tr><td>🕒 查看历史输入的命令</td><td>↑ / ↓</td><td>↑ / ↓</td></tr>' +
                '</tbody></table></div>' +

                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-sm text-yellow-700 mt-3">' +
                '<strong>⚠️ 提示：</strong>在多行输入时，如果快捷键冲突，你也可以输入反斜杠 <code class="bg-yellow-100 px-1 rounded text-xs">\\</code> 然后按 Enter 键来实现换行。' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">⚖️ 第四部分：新手最容易搞混的三对命令</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">别怕记混，我们用大白话对比一下它们的区别：</p>' +

                '<div class="space-y-3">' +

                '<div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">' +
                '<p class="font-bold text-blue-800 text-lg mb-2">1. /clear vs /compact（清理白板）</p>' +
                '<div class="text-sm space-y-1 text-blue-700">' +
                '<p><strong>/clear</strong> 是<em>彻底擦除</em>整块白板，让 AI 的大脑恢复成一张白纸。<br><span class="text-xs">什么时候用：完成旧任务，准备开始全新任务时。</span></p>' +
                '<p class="mt-1"><strong>/compact</strong> 是<em>浓缩白板上的字</em>，剔除废话，只保留核心笔记。<br><span class="text-xs">什么时候用：同一个长任务做到一半，白板快写满了需要腾出空间时。</span></p>' +
                '</div></div>' +

                '<div class="p-4 bg-green-50 rounded-lg border-2 border-green-300">' +
                '<p class="font-bold text-green-800 text-lg mb-2">2. /btw vs 普通提问（提问方式）</p>' +
                '<div class="text-sm space-y-1 text-green-700">' +
                '<p><strong>普通提问</strong> 会被写在白板上，成为长久记忆，并持续消耗未来的"流量（Token）"。</p>' +
                '<p><strong>/btw</strong> 就像弹出一个<em>"阅后即焚"</em>的临时聊天框，问完就关掉，不会留在历史记录里，不污染当前的工作上下文。</p>' +
                '</div></div>' +

                '<div class="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">' +
                '<p class="font-bold text-purple-800 text-lg mb-2">3. /status vs /cost（查看信息）</p>' +
                '<div class="text-sm space-y-1 text-purple-700">' +
                '<p><strong>/status</strong> 看的是<em>配置信息</em>：你当前连的是什么模型（如 glm-4.7）、服务器地址对不对。</p>' +
                '<p><strong>/cost</strong> 看的是<em>消费信息</em>：你这个会话消耗了多少使用额度（Tokens）。</p>' +
                '</div></div>' +

                '</div></div>'
        }
    ],
    quiz: [
        {
            question: '你的 Claude 正在疯狂地阅读文件并自动写代码，但你突然发现它理解错了你的意思，这时候最快叫停它的快捷键是？',
            options: [
                { text: '拔掉电脑网线。' },
                { text: '按下键盘上的 Esc 键。' },
                { text: '输入 /clear 命令。' }
            ],
            correct: 1,
            successMsg: '没错！Esc 键是最快的紧急叫停快捷键。',
            explanation: '无论 Claude 在做什么（读文件、写代码、思考中），按下 Esc 键都会让它立刻停下来。这是最快速的中断方式，无需输入任何命令。'
        },
        {
            question: '关于 /compact 和 /clear 的区别，下面哪种说法是正确的？',
            options: [
                { text: '它们没有任何区别，都是用来结束软件的。' },
                { text: '/compact 适合在一个长任务进行到一半时用来浓缩记忆腾空间；而 /clear 适合做完旧任务、开始新任务时彻底清空大脑。' },
                { text: '/clear 是用来清空电脑回收站的命令。' }
            ],
            correct: 1,
            successMsg: '没错！/compact 是浓缩记忆，/clear 是彻底清空。',
            explanation: '/compact 像"笔记浓缩"——把长对话总结成精要，保留了关键信息但腾出了空间。/clear 像"撕掉笔记"——完全清空白板，适合换新任务时使用。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['7'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_7.steps, '', MODULE_7.id, {
        nextModuleId: '8',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_7.id, MODULE_7.quiz, function() {
                RatingModal.checkAndShow('7', function() {
                    stepViewer.showNextModuleButton(nextBtnId);
                });
            });
        }
    });
};
