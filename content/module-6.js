// 模块6：精打细算 — 省钱省额度的必修课
var MODULE_6 = {
    id: '6',
    title: '省钱省额度',
    steps: [
        {
            content: '<div class="step-title">💡 先搞懂两个核心概念</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">恭喜你坚持到了这里！当你开始频繁使用 Claude Code 之后，你可能会遇到一个新烦恼：<strong>额度怎么掉得这么快？</strong>或者聊着聊着，<strong>它怎么变笨了？</strong></p>' +
                '<p class="mb-3">为了帮你守住钱包并保持 AI 的聪明才智，在这个模块里，我们将学习怎么做一个"精打细算"又"懂管理"的好老板。</p>' +

                '<div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 mb-4">' +
                '<p class="font-bold text-blue-800 text-lg mb-2">🪙 Token（使用额度/字数）</p>' +
                '<p class="text-sm text-blue-700">可以理解成你每个月的<strong>"手机流量"</strong>。你给 Claude 发的指令越长、让它读的文件越大，每次它回复时消耗的流量就越多。</p>' +
                '</div>' +

                '<div class="p-4 bg-purple-50 rounded-lg border-2 border-purple-300 mb-3">' +
                '<p class="font-bold text-purple-800 text-lg mb-2">📋 Context Window（上下文窗口）</p>' +
                '<p class="text-sm text-purple-700">可以理解成 Claude 的<strong>"工作记忆"</strong>或一块<strong>"白板"</strong>。这块白板的空间是有限的。随着你们对话越来越长，白板上的字越写越满，Claude 就会开始"忘事"——明明前面跟它交代过的事，后面它就记不住了，甚至开始胡言乱语、犯低级错误。</p>' +
                '</div>' +

                '<div class="p-3 bg-green-50 rounded-lg border border-green-200 text-center">' +
                '<p class="font-bold text-green-700">💰 这个模块的价值在于：</p>' +
                '<p class="text-sm text-green-600">只要学会下面这几个简单的神仙技巧，同样的钱，你可以让 Claude 帮你干<strong>两倍甚至三倍</strong>的活！</p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🛠️ 核心命令详解：管理你的"白板"（上）</div>' +
                '<div class="step-content">' +

                '<div class="p-4 bg-orange-50 rounded-lg border-2 border-orange-300 mb-4">' +
                '<p class="font-bold text-orange-800 text-lg mb-2">🗜️ /compact（压缩对话历史）</p>' +
                '<div class="text-sm text-gray-700 space-y-2">' +
                '<p><strong>这是一句话干什么的：</strong>把白板上密密麻麻的聊天记录整理成一份简短的摘要，腾出空间继续干活，同时保留了核心的上下文记忆。</p>' +
                '<p><strong>什么时候会用到它：</strong>强烈建议你要<strong>主动使用</strong>！不要等到白板爆满、Claude 自动触发压缩。因为当它自动压缩时，它的脑容量已经被塞满，状态已经很差了。当你用 /cost 命令查看，发现对话已经很长时，或者感觉 Claude 回复开始变慢、开始忘事时，就是该主动 /compact 的信号。</p>' +
                '<p><strong>具体怎么操作：</strong>你可以给它一句提示，告诉它什么最重要。</p>' +
                '<div class="p-2 bg-white rounded border border-orange-200 text-sm font-mono">/compact 请重点保留我们关于登录功能的所有决定</div>' +
                '<p><strong>和其他命令怎么区分：</strong>它就像<em>"笔记浓缩"</em>，扔掉废话保留重点；而等下要讲的 /clear 是<em>彻底撕掉笔记</em>。</p>' +
                '</div></div>' +

                '<div class="p-4 bg-red-50 rounded-lg border-2 border-red-300">' +
                '<p class="font-bold text-red-800 text-lg mb-2">🧹 /clear（清空重来）</p>' +
                '<div class="text-sm text-gray-700 space-y-2">' +
                '<p><strong>这是一句话干什么的：</strong>完全擦掉白板，让 Claude 恢复成一张白纸，开始全新的对话。</p>' +
                '<p><strong>什么时候会用到它：</strong>当你做完了一个任务，准备切换到完全不相关的新任务时。</p>' +
                '<p><strong>具体怎么操作：</strong>直接发送命令。</p>' +
                '<div class="p-2 bg-white rounded border border-red-200 text-sm font-mono">/clear</div>' +
                '<p><strong>和其他命令怎么区分：</strong>/compact 适合同一个长任务进行到一半时腾空间；/clear 适合换新任务时断舍离，防止上一个任务的记忆干扰新任务。</p>' +
                '</div></div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🛠️ 核心命令详解：管理你的"白板"（下）</div>' +
                '<div class="step-content">' +

                '<div class="p-4 bg-green-50 rounded-lg border-2 border-green-300 mb-4">' +
                '<p class="font-bold text-green-800 text-lg mb-2">💬 /btw（不占白板的快速提问）</p>' +
                '<div class="text-sm text-gray-700 space-y-2">' +
                '<p><strong>这是一句话干什么的：</strong>弹出一个临时小窗口问个问题，问完就关掉，白板上不会留下任何痕迹。</p>' +
                '<p><strong>什么时候会用到它：</strong>当你正在专心做一个大任务，突然遇到一个不懂的词想查一下翻译，或者想搜个小知识，用它提问就不会污染你主任务的上下文。</p>' +
                '<p><strong>具体怎么操作：</strong></p>' +
                '<div class="p-2 bg-white rounded border border-green-200 text-sm font-mono">/btw 帮我翻译一下 "authentication" 这个单词是什么意思？</div>' +
                '<p><strong>和其他命令怎么区分：</strong>正常的对话都会被记录在白板上消耗未来的"流量"，而 /btw 就像<em>阅后即焚的悄悄话</em>。</p>' +
                '</div></div>' +

                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-sm text-yellow-700">' +
                '<strong>⚠️ 提示：</strong>/btw 目前主要在<strong>终端 CLI 版本</strong>里使用效果最稳定。如果你用的是桌面 App 或 VS Code，可以直接开一个全新的独立对话窗口来替代这个功能（问完直接关掉那个窗口即可），效果是完全一样的。' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🚨 5 个最容易烧掉大量额度的坏习惯</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">为了不浪费流量，请务必避开这些坑，养成好习惯：</p>' +

                '<div class="space-y-3">' +

                '<div class="p-3 bg-red-50 rounded-lg border border-red-200">' +
                '<p class="text-sm"><span class="font-bold text-red-600">❌ 坏习惯：</span>一个对话做太多不相关的事</p>' +
                '<p class="text-sm"><span class="font-bold text-green-600">✅ 好习惯：</span>不同任务开新对话。不要在一个对话里既修 Bug，又写新页面，还顺便让它帮你写邮件。白板上的无关信息越多，Claude 每次思考带的"包袱"就越重，白白浪费流量。</p>' +
                '</div>' +

                '<div class="p-3 bg-red-50 rounded-lg border border-red-200">' +
                '<p class="text-sm"><span class="font-bold text-red-600">❌ 坏习惯：</span>让 Claude 读整个项目所有文件</p>' +
                '<p class="text-sm"><span class="font-bold text-green-600">✅ 好习惯：</span>只让它读和当前任务相关的文件。盲目读取整个文件夹会塞满白板。明确告诉它去读哪个具体文件（利用我们前面学的 <code class="bg-gray-100 px-1 rounded text-xs">@文件名</code>）才是明智之举。</p>' +
                '</div>' +

                '<div class="p-3 bg-red-50 rounded-lg border border-red-200">' +
                '<p class="text-sm"><span class="font-bold text-red-600">❌ 坏习惯：</span>上传整张截图 / 整份长 PDF</p>' +
                '<p class="text-sm"><span class="font-bold text-green-600">✅ 好习惯：</span>只截取关键部分 / 复制关键文字。一张大图或一份 15 页的 PDF 可能会瞬间烧掉几千甚至上万的额度！把 PDF 里的核心文字复制粘贴出来，或者只裁剪出报错的那一小块截图给它，能帮你省下巨量额度。</p>' +
                '</div>' +

                '<div class="p-3 bg-red-50 rounded-lg border border-red-200">' +
                '<p class="text-sm"><span class="font-bold text-red-600">❌ 坏习惯：</span>不断纠错同一个问题（越改越乱）</p>' +
                '<p class="text-sm"><span class="font-bold text-green-600">✅ 好习惯：</span>两次纠错无效就 /clear 重新提一个更清楚的指令。如果 Claude 连续两次都没改对，说明白板里已经充满了"错误思路"的污染。此时千万别继续跟它死磕，果断 /clear 清空，总结刚才失败的教训，重新写一个更清晰的指令，反而出奇地快。</p>' +
                '</div>' +

                '<div class="p-3 bg-red-50 rounded-lg border border-red-200">' +
                '<p class="text-sm"><span class="font-bold text-red-600">❌ 坏习惯：</span>每次都从头解释项目背景</p>' +
                '<p class="text-sm"><span class="font-bold text-green-600">✅ 好习惯：</span>配置好 CLAUDE.md 让它自动读取。不要每次开新对话都手打几百字解释"这是个什么网站"、"需要用什么语言"。把这些写进 CLAUDE.md，不仅省事，还能避免啰嗦的口语对话消耗额外额度。</p>' +
                '</div>' +

                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🧗‍♀️ 长任务特别技巧</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">当你打算做个大项目（比如从零开发一个完整的个人网站）时，请记住这两个黄金思路：</p>' +

                '<div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 mb-4">' +
                '<p class="font-bold text-blue-800 text-lg mb-2">✂️ 任务拆分</p>' +
                '<p class="text-sm text-blue-700">绝对不要一口气给 Claude 下达<em>"帮我写个购物网站"</em>这种宏大指令。把大任务切成小块（比如：第一步先做商品列表，没问题了；第二步再做购物车）。每块完成后确认没问题再继续，这能避免让它一口气做太多导致后期严重出错。</p>' +
                '</div>' +

                '<div class="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">' +
                '<p class="font-bold text-purple-800 text-lg mb-2">🔀 什么时候开新对话 vs 什么时候用 /compact？</p>' +
                '<div class="text-sm text-purple-700 space-y-2">' +
                '<div class="p-2 bg-white rounded border border-purple-200">' +
                '<p><strong>开新对话（/clear）：</strong>当"商品列表"彻底做完了，准备开始做"购物车"这个新话题时 → 使用 /clear 开始新对话。</p>' +
                '</div>' +
                '<div class="p-2 bg-white rounded border border-purple-200">' +
                '<p><strong>浓缩记忆（/compact）：</strong>当"商品列表"还没做完，但感觉来回修改了好几次，白板快满了（或者发现它开始忘事了） → 使用 /compact 浓缩当前记忆接着干。</p>' +
                '</div>' +
                '</div></div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '你的长任务做到一半，发现用 /cost 查看额度消耗越来越快，而且 Claude 回复变慢，有些前面的设定它好像忘记了，这时候你该怎么做最合适？',
            options: [
                { text: '发送 /clear 命令，把它彻底清空，大不了从头再做一遍。' },
                { text: '发送 /compact 请重点保留我们刚才确认的网页颜色设定，主动浓缩它的记忆腾出空间。' },
                { text: '不管它，继续在对话框里骂它为什么这么笨。' }
            ],
            correct: 1,
            successMsg: '没错！用 /compact 主动浓缩记忆，既不丢失关键信息又能腾出空间。',
            explanation: '/compact 会把你漫长的对话历史浓缩成一份简短摘要，既保留了关键上下文（比如配色方案），又释放了白板空间。注意要主动使用，不要等 Claude 自己触发压缩。'
        },
        {
            question: '下面哪种做法是在"疯狂烧钱（消耗极多额度）"，属于我们应该极力避免的坏习惯？',
            options: [
                { text: '遇到报错时，只把报错的那两行代码或者那一小块错误提示截图发给 Claude。' },
                { text: '做完一个独立的功能后，立刻使用 /clear 重新开一个干净的对话。' },
                { text: '嫌麻烦，每次有问题直接把一份 50 页的需求说明 PDF 全文发给 Claude，让它自己从里面找答案。' }
            ],
            correct: 2,
            successMsg: '没错！把整份大文件直接发给 Claude 是最费钱的做法之一。',
            explanation: '发送整份 50 页 PDF 会瞬间消耗巨量 Token。正确做法是只复制粘贴其中相关的几段文字，或者只截取关键的报错截图，可以省下几千甚至上万的额度。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['6'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_6.steps, '', MODULE_6.id, {
        nextModuleId: '7',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_6.id, MODULE_6.quiz, function() {
                stepViewer.showNextModuleButton(nextBtnId);
            });
        }
    });
};
