// 模块5：CLAUDE.md 是什么以及怎么设置
var MODULE_5 = {
    id: '5',
    title: 'CLAUDE.md',
    steps: [
        {
            content: '<div class="step-title">① 为什么需要它（没有它会发生什么？）</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">举个具体的生活场景：比如你正在做一个<strong>连载小说</strong>的网站，每次打开黑窗口开始新的对话，你都得不厌其烦地跟 Claude 解释一遍：<em>"嘿，记住哦，这是个小说网站，面向中国读者所以界面要用中文，语言风格要活泼一点，数据库用的是 MySQL……"</em></p>' +
                '<div class="p-4 bg-orange-50 rounded-lg border-2 border-orange-300 mb-3">' +
                '<p class="font-medium text-orange-800 mb-1">如果没有 CLAUDE.md：</p>' +
                '<p class="text-sm text-orange-700">你就像一个每天都在带新人的苦命老板，每天都要把这些背景情况重新交代一遍。</p>' +
                '</div>' +
                '<div class="p-4 bg-green-50 rounded-lg border-2 border-green-300">' +
                '<p class="font-medium text-green-800 mb-1">有了它之后：</p>' +
                '<p class="text-sm text-green-700">这些话你只需要<strong>写一次</strong>！以后 Claude 每次都会默默记住，直接进入正题干活。</p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">② 怎么创建它？（两种方法）</div>' +
                '<div class="step-content">' +

                '<div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 mb-4">' +
                '<p class="font-bold text-blue-800 text-lg mb-2">🌟 方法一（强烈推荐）：用 /init 命令让 Claude 自动生成</p>' +
                '<p class="text-sm text-blue-700 mb-2">这是最省事的办法，让 AI 帮自己写工作手册：</p>' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">' +
                '<li>打开你的终端，进入你的项目文件夹。这里我们需要用到一个叫 <code class="bg-gray-100 px-1 rounded text-xs">cd</code> 的命令（cd 就是 <strong>Change Directory</strong> 的缩写，意思就是"进入某个文件夹"）。比如你的项目文件夹在桌面上，名叫 <code class="bg-gray-100 px-1 rounded text-xs">novel_site</code>：</li>' +
                '</ol>' +
                '<div class="platform-mac hidden"><div class="ml-6 mt-1 mb-2 p-2 bg-gray-100 rounded text-sm font-mono">cd Desktop/novel_site</div></div>' +
                '<div class="platform-windows hidden"><div class="ml-6 mt-1 mb-2 p-2 bg-gray-100 rounded text-sm font-mono">cd Desktop\\novel_site</div></div>' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside" start="2">' +
                '<li>输入 <code class="bg-gray-100 px-1 rounded text-xs">claude</code> 启动 AI 小助手。</li>' +
                '<li>在底部的对话框里，直接输入 <code class="bg-gray-100 px-1 rounded text-xs">/init</code> 并发送。</li>' +
                '<li>Claude 会自动像雷达一样扫描你现有的项目文件，帮你总结并生成一份初始的 CLAUDE.md 文件。这个文件会自动出现在你的项目根目录（也就是你项目文件夹的最外层）。</li>' +
                '</ol>' +
                '</div>' +

                '<div class="p-4 bg-gray-50 rounded-lg border-2 border-gray-300">' +
                '<p class="font-bold text-gray-800 text-lg mb-2">📝 方法二：自己新建</p>' +
                '<p class="text-sm text-gray-700 mb-2">你也可以直接在你的项目文件夹里，用鼠标右键新建一个文本文档，把它重命名为 <code class="bg-gray-100 px-1 rounded text-xs">CLAUDE.md</code>（注意字母要<strong>全部大写</strong>，扩展名是 <code class="bg-gray-100 px-1 rounded text-xs">.md</code>）。</p>' +
                '<p class="text-sm text-gray-500">💡 这比较适合你刚刚建好一个空文件夹、里面还没有任何代码的"全新项目"，一切从零开始定规矩。</p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">③ CLAUDE.md 里应该写什么？</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">不要用英语写得像教科书一样，直接用大白话写就行。这里有一个适合初学者的个人项目模板例子，你可以直接复制到你的 CLAUDE.md 文件里去修改：</p>' +

                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-4 rounded-lg overflow-x-auto"><code># 项目是什么' +
                '\n这是一个面向中文读者的连载小说网站。' +
                '\n' +
                '\n# 技术选择' +
                '\n- 前端页面使用简单的 HTML、CSS 和原生 JavaScript' +
                '\n- 数据库使用 MySQL' +
                '\n' +
                '\n# 代码风格偏好' +
                '\n- 所有的代码注释必须用简体中文写，要写得让没有任何编程基础的人也能看懂' +
                '\n- 所有的文件名、函数名请用英文命名（比如用 getUser 而不是 quYongHu）' +
                '\n- 页面设计风格要温馨、活泼一点' +
                '\n' +
                '\n# 绝对不能动的东西（红线规则）' +
                '\n- 绝对不要修改 `database_config.js` 文件，那是我的数据库核心配置！' +
                '\n- 遇到报错时，不要随便删除文件来解决，必须先向我解释错误原因' +
                '\n' +
                '\n# 常用命令' +
                '\n- 运行项目的命令是：`npm start`' +
                '\n- 检查代码错误的命令是：`npm test`</code></pre>' +
                '</div>'
        },
        {
            content: '<div class="step-title">④ 写 CLAUDE.md 最重要的注意事项（避坑指南）</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">在写这本"工作手册"时，有两个新手最容易踩的坑，一定要避开：</p>' +

                '<div class="p-4 bg-red-50 rounded-lg border-2 border-red-300 mb-4">' +
                '<p class="font-bold text-red-800 text-lg mb-1">🕳️ 坑一：写得又臭又长</p>' +
                '<p class="text-sm text-red-700">如果你的手册写得像一本字典，Claude 反而会"看走眼"，导致最关键的规则被淹没在字里行间。建议把内容控制在<strong>一屏能看完</strong>的范围，绝对不要超过 <strong>5000 个字</strong>（也就是 5000 个 token）。</p>' +
                '</div>' +

                '<div class="p-4 bg-red-50 rounded-lg border-2 border-red-300">' +
                '<p class="font-bold text-red-800 text-lg mb-1">🕳️ 坑二：写一堆废话</p>' +
                '<p class="text-sm text-red-700">Claude 本来就很聪明，它本来就会做的事（比如"请写出高质量、没有 bug 的代码"这种套话）千万不要写进去。只写<strong>它不知道、但你需要它必须记住</strong>的东西。</p>' +
                '<p class="text-sm text-red-700 mt-2 font-medium">记住：精简的 CLAUDE.md 比臃肿的 CLAUDE.md 效果好十倍！</p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">⑤ 进阶小技巧：全局 CLAUDE.md vs 项目 CLAUDE.md</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">简单来说，工作手册有两个安放位置，作用范围不同：</p>' +

                '<div class="p-4 bg-purple-50 rounded-lg border-2 border-purple-300 mb-4">' +
                '<p class="font-bold text-purple-800 mb-1">📁 项目 CLAUDE.md</p>' +
                '<p class="text-sm text-purple-700">放在你具体的项目文件夹里（比如 小说网站 文件夹），里面的规矩<strong>只对这一个项目生效</strong>。</p>' +
                '</div>' +

                '<div class="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-300">' +
                '<p class="font-bold text-indigo-800 mb-1">🌍 全局 CLAUDE.md</p>' +
                '<p class="text-sm text-indigo-700 mb-2">放在你电脑的用户主目录下（<strong>对所有项目生效</strong>）。具体路径：</p>' +
                '<div class="platform-mac hidden"><div class="p-2 bg-gray-100 rounded text-sm font-mono mb-1">~/.claude/CLAUDE.md</div></div>' +
                '<div class="platform-windows hidden"><div class="p-2 bg-gray-100 rounded text-sm font-mono mb-1">C:\\Users\\你的用户名\\.claude\\CLAUDE.md</div></div>' +
                '<p class="text-sm text-indigo-700 mt-2">你可以把自己的通用习惯（比如<em>"永远用中文回复我"</em>、<em>"每次修改前都要给我解释原因"</em>）写在全局文件里，这样不管你以后做小说网站还是做记账工具，它都会默认遵守你的个人偏好。</p>' +
                '</div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '当你在编写 CLAUDE.md 文件时，哪种做法是最聪明的？',
            options: [
                { text: '尽可能写得非常长，把所有的代码原理和基础知识都写进去，越长越好。' },
                { text: '只写 Claude 不知道的、特定于你这个项目的重要背景和规矩，尽量精简，不要写废话。' },
                { text: '在里面反复写上"请每次给我写没有 bug 的完美代码"这种通用要求。' }
            ],
            correct: 1,
            successMsg: '没错！精简、只写项目特有的信息，CLAUDE.md 效果最好。',
            explanation: 'CLAUDE.md 的精髓在于"只说 Claude 不知道的事"。通用套话和基础知识只会淹没关键信息。精简的项目手册比臃肿的手册效果好十倍。'
        },
        {
            question: '你想让 Claude Code 每次在你的"小说网站"项目里干活时，都知道有个配置文件绝对不能碰，你应该怎么做最省事？',
            options: [
                { text: '每次开启新对话跟 Claude 聊天前，先在对话框里打字重复提醒它一遍。' },
                { text: '把这句要求写在这个项目文件夹的 CLAUDE.md 文件里，它每次上班都会自动看。' },
                { text: '每次让 Claude 开始干活前，先用 /clear 清空对话记录，重新开始。' }
            ],
            correct: 1,
            successMsg: '没错！写在项目 CLAUDE.md 里，一劳永逸。',
            explanation: '写在项目的 CLAUDE.md 文件里是最省事的做法。Claude 每次启动都会自动读取这个文件，不需要你每次重复提醒。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['5'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_5.steps, '', MODULE_5.id, {
        nextModuleId: '6',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_5.id, MODULE_5.quiz, function() {
                stepViewer.showNextModuleButton(nextBtnId);
            });
        }
    });

    var originalRenderAllSteps = stepViewer.renderAllSteps.bind(stepViewer);
    stepViewer.renderAllSteps = function() {
        originalRenderAllSteps();
        if (window.platformSwitcher) window.platformSwitcher.applyPlatform();
    };
};
