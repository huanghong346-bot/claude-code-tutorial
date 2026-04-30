// 模块4：安装后必学的基础操作
var MODULE_4 = {
    id: '4',
    title: '基础操作',
    steps: [
        {
            content: '<div class="step-title">🚀 第1步：开始第一个对话</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>唤醒你的 Claude Code AI 小助手，下达你的第一个任务。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你打开电脑，准备开始工作时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>打开界面后，直接在底部的输入框里打字即可。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>帮我在当前目录下新建一个文件夹，名字叫"我的第一个AI项目"</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>如果你使用的是黑色的终端窗口，输入完文字后记得按下回车键（Enter）发送。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🎯 第2步：精准读取某个文件（@ 符号用法）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>直接把某个文件的内容"喂"给 Claude，让它专注参考这一个文件干活。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你明确知道要在哪个文件里修改，不想让它瞎翻其他文件浪费时间时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>在输入框打一个 <code class="bg-gray-100 px-1 rounded text-xs">@</code> 符号，后面连上文件名。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>@index.html 帮我把这个网页的背景颜色改成浅蓝色</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>打出 <code class="bg-red-100 px-1 rounded text-xs">@</code> 之后系统通常会自动弹出文件列表让你选，不用自己死记硬背拼写。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">📂 第3步：读取整个文件夹 / 项目</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>让 Claude 像资深员工一样，快速扫视你所在文件夹里的所有文件。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你刚接手一个完全陌生的文件夹，或者想让它帮你梳理整个项目结构时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>不需要任何特殊符号，直接用大白话提问即可。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>请阅读当前文件夹里的所有文件，然后用大白话给我写一份总结，告诉我这个项目是干什么用的</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>如果文件夹里有成千上万个文件，它可能会读很久并且消耗大量"脑力"（额度），建议尽量在小项目里使用。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🧠 第4步：查看它的思考过程</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>窥探 Claude 大脑里的想法，看它打算按什么步骤解决你的问题。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当它转圈圈处理了很久，你想知道它是不是卡住了，或者想看看它是怎么分析错误的。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>' +
                '<ul class="list-disc list-inside space-y-1 mt-1"><li>在<strong>终端</strong>里，Claude 的思考过程会自动显示在输出里，用<strong>上下方向键</strong>可以滚动查看。如果输出太长想折叠，可以按 <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Esc</kbd> 暂停当前输出。</li>' +
                '<li>在<strong>VS Code 或桌面 App</strong>里，思考过程会以可折叠的方式显示在界面上，直接点击就能展开或收起。</li></ul></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>它的思考过程虽然很长，但只是为了理清思路，最终不会把这些废话写进你的代码文件里。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🛑 第5步：紧急叫停（中断操作）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>强制打断 Claude 正在干的活，让它立刻停手。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你发现它理解错了你的意思，或者正在翻看不该动的文件，你想赶紧阻止它时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>直接在键盘上按下 <kbd class="px-2 py-1 bg-gray-200 rounded text-sm font-bold">Esc</kbd> 键（终端里也可以按 <kbd class="px-2 py-1 bg-gray-200 rounded text-sm font-bold">Ctrl + C</kbd>）。<br><br><strong>你可以这样说：</strong>（按下按键打断后，接着打字对它说）<em>"停下来，你理解错了，我的真实意思是..."</em></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>如果你想撤销它刚才做过的修改，可以连按两次 Esc 键（这个功能叫 <code class="bg-red-100 px-1 rounded text-xs">/rewind</code>）。连按两次 Esc 会弹出一个检查点选择界面，让你选择要回到哪个时间点，这不是无条件完全撤销，需要你自己选择。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">✅ 第6步：确认或拒绝修改（Accept / Reject）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>像老板审批文件一样，决定是否采纳 Claude 刚刚写好的代码。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>每次 Claude 提出修改建议，并弹出左边红字（旧内容）右边绿字（新内容）的对比界面（Diff 查看器）时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>' +
                '<ul class="list-disc list-inside space-y-1 mt-1"><li>如果觉得改得好，点击界面上的 <strong>"Accept（接受）"</strong> 或者在终端按回车（<kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Enter</kbd>）</li>' +
                '<li>如果觉得不行，点击 <strong>"Reject（拒绝）"</strong> 或者在终端按取消键</li></ul></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>如果不小心点错了接受，比较稳妥的办法是按两次 Esc 键使用 <code class="bg-red-100 px-1 rounded text-xs">/rewind</code> 回滚到修改前的状态。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">📝 第7步：切换到计划模式（Plan Mode）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>让 Claude 先写一份"施工图纸"，你点头同意后它才开始真正"动工"写文件。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你要做一个复杂的大功能（比如做一个新网页），怕它一上来就改乱文件时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>按下 <kbd class="px-2 py-1 bg-gray-200 rounded text-sm font-bold">Shift + Tab</kbd> 切换到计划模式。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>我想在网站上加一个用户登录功能，请先给我一个实施方案，不要直接动手写代码</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>新手强烈建议多用这个模式！磨刀不误砍柴工，先看计划再动手能避免很多意想不到的大坑。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">💰 第8步：查看当前花费的额度（/cost 命令）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>查看当前这个对话已经用掉了多少 AI 的服务额度。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你聊了很久，想知道自己是不是快把限制的额度用光了时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>在输入框里直接输入命令并回车。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>/cost</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>AI 的额度就像手机流量，聊得越长、给它看的文件越多，它每次回答消耗的流量就越大。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">💬 第9步：问个不留痕迹的快速问题（/btw 命令）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>弹出一个临时小窗口问问题，问完就关掉，不把这些废话留在正式的聊天记录里。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你正在专心解决一个大问题，突然遇到一个基础名词不懂（比如"什么是前端？"），想偷偷查一下字典，又不想让这个问题干扰 Claude 正在干的正事时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>输入 <code class="bg-gray-100 px-1 rounded text-xs">/btw</code> 然后加上你的问题。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>/btw HTML和CSS有什么区别？</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>这个窗口关掉后，Claude 就不会记住你在这里问过的问题，能非常有效地帮你保持主对话界面的清爽。</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🧹 第10步：结束当前任务重新开始（/clear 命令）</div>' +
                '<div class="step-content">' +
                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3 text-sm"><strong>这是干什么的：</strong>彻底清空当前的聊天记录，让 Claude 的大脑恢复成一张白纸。</div>' +
                '<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3 text-sm"><strong>什么时候用到它：</strong>当你刚完成了一个功能准备做下一个完全不相关的功能，或者 Claude 怎么纠正都不对、开始"钻牛角尖"时。</div>' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-3 text-sm"><strong>具体怎么操作：</strong>直接在输入框输入命令即可。<br><br><strong>你可以这样说：</strong><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>/clear</code></pre></div>' +
                '<div class="p-3 bg-red-50 rounded-lg border border-red-200 text-sm"><strong>⚠️ 提示：</strong>这是最重要的省钱、防错秘籍！旧聊天记录就像背包里的石头，背得越久，它干活越慢、越容易犯错。换任务前一定要记得"清空背包"！</div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '当你正在让 Claude 帮你写代码，突然遇到一个不懂的英文单词，为了不让这个简单的提问干扰当前长长的对话记录，你应该用哪个命令？',
            options: [
                { text: '直接发送单词问它。' },
                { text: '使用 /btw 命令。' },
                { text: '使用 /clear 命令。' }
            ],
            correct: 1,
            successMsg: '没错！/btw 命令会弹出临时窗口，问完就关，不干扰主对话。',
            explanation: '/btw（by the way）命令专门用来问"顺便一提"的快速问题。它会在一个临时窗口里回答你，关掉后不会留在聊天记录里，保持主对话的清爽。'
        },
        {
            question: 'Claude 正在疯狂阅读并修改你电脑里的文件，你突然发现自己提错了要求，不想让它继续改下去了，这时候最快的解决办法是？',
            options: [
                { text: '直接拔掉电脑电源。' },
                { text: '默默等它改完，然后再让它慢慢改回来。' },
                { text: '按下键盘上的 Esc 键紧急叫停它。' }
            ],
            correct: 2,
            successMsg: '没错！按 Esc 键可以紧急叫停 Claude 正在进行的操作。',
            explanation: 'Esc 键是紧急中断键，无论 Claude 在做什么（读文件、写代码、思考），按下 Esc 都会让它立刻停手。连按两次 Esc 还会触发 /rewind 回滚功能。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['4'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_4.steps, '', MODULE_4.id, {
        nextModuleId: '5',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_4.id, MODULE_4.quiz, function() {
                stepViewer.showNextModuleButton(nextBtnId);
            });
        }
    });
};
