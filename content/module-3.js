// 模块3：安装方法
// 安装方式Tab切换
window._m3_switchTab = function(tab) {
    var tabs = ['desktop', 'vscode', 'cli'];
    var colors = ['bg-orange-500 text-white', 'bg-blue-500 text-white', 'bg-green-500 text-white'];
    var inactiveCls = 'bg-gray-200 text-gray-600 hover:bg-gray-300';

    tabs.forEach(function(t, i) {
        var label = document.getElementById('m3-tab-' + t);
        var panel = document.getElementById('m3-panel-' + t);
        if (!label || !panel) return;
        if (t === tab) {
            label.className = 'install-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer ' + colors[i];
            panel.style.display = 'block';
        } else {
            label.className = 'install-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer ' + inactiveCls;
            panel.style.display = 'none';
        }
    });

    // 重新应用平台切换
    if (window.platformSwitcher) window.platformSwitcher.applyPlatform();
};

var MODULE_3 = {
    id: '3',
    title: '安装方法',
    steps: [
        {
            // 步骤1：防卡壳 + AI临时客服
            content: '<div class="step-title">💡 防卡壳必做：找个"临时客服"陪跑！</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">准备好大干一场了吗？现在，我们终于要把 Claude Code 这双"手脚"正式安装到你的电脑里了！无论你之前选择了路线A还是路线B，<strong>安装步骤都是一模一样的</strong>。</p>' +
                '<p class="mb-3">但在正式动手之前，我必须交给你一个<strong>超级重要的护身符</strong>：安装电脑软件时，因为每台电脑的情况不同，偶尔会蹦出几句看不懂的英文报错。<strong>别慌！</strong>由于这个网页无法实时回答你的问题，我强烈建议你现在立刻另开一个浏览器窗口，打开下面任意一个 AI 助手，让它做你的专属客服：</p>' +

                '<div class="grid grid-cols-2 gap-2 mb-3">' +
                '<div class="p-2 bg-green-50 border border-green-200 rounded-lg text-sm"><strong class="text-green-700">国内可直接访问：</strong>' +
                '<ul class="mt-1 text-green-700 space-y-0.5"><li>豆包（doubao.com）</li><li>文心一言（yiyan.baidu.com）</li><li>Kimi（kimi.moonshot.cn）</li><li>通义千问（tongyi.aliyun.com）</li></ul></div>' +
                '<div class="p-2 bg-purple-50 border border-purple-200 rounded-lg text-sm"><strong class="text-purple-700">需要网络代理：</strong>' +
                '<ul class="mt-1 text-purple-700 space-y-0.5"><li>ChatGPT（chatgpt.com）</li><li>Gemini（gemini.google.com）</li><li>Claude（claude.ai）</li></ul></div>' +
                '</div>' +

                '<div class="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">' +
                '<p class="font-medium text-yellow-800 mb-2">👉 请把下面这段话复制粘贴发给AI客服：</p>' +
                '<pre class="bg-white border border-yellow-200 p-3 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">你好！我正在用一个网页教程学习安装和使用Claude Code（一个让AI直接在你电脑终端里帮你写代码的工具）。这个教程会一步一步带着我走，但如果我遇到报错或者不懂的地方，我会把问题截图或者代码粘贴到这里请你帮助。请用简单易懂的中文回答，不要假设我有编程基础。我们的目标是让我顺利完成Claude Code的安装和基础使用。</pre>' +
                '</div>' +
                '<p class="mt-3 font-medium text-green-700">护身符准备好了吗？现在我们正式开始！</p>' +
                '</div>'
        },
        {
            // 步骤2：三种安装方式（3-Tab组件，每个Tab内含Mac/Windows平台切换）
            content: '<div class="step-title">🛠 三种安装方式（挑选其中一种即可）</div>' +
                '<div class="step-content mb-4">' +
                '<p>目前官方提供了三种安装方式，请<strong>根据你的喜好挑选其中一种</strong>完成即可，千万不需要三个都装！</p>' +
                '</div>' +

                // 三Tab切换组件
                '<div class="install-tabs border-2 border-gray-300 rounded-xl overflow-hidden">' +
                // Tab标签栏
                '<div class="flex border-b border-gray-200 bg-gray-50 px-3 pt-3 gap-1 flex-wrap">' +
                '<span id="m3-tab-desktop" class="install-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-orange-500 text-white" onclick="window._m3_switchTab(\'desktop\')">🖥️ 桌面 App</span>' +
                '<span id="m3-tab-vscode" class="install-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-300" onclick="window._m3_switchTab(\'vscode\')">🔌 VS Code 插件</span>' +
                '<span id="m3-tab-cli" class="install-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-300" onclick="window._m3_switchTab(\'cli\')">⌨️ 终端 CLI</span>' +
                '</div>' +

                // Tab 1：桌面 App
                '<div id="m3-panel-desktop" class="install-tab-panel p-4" style="display:block">' +
                '<p class="text-sm text-gray-700 mb-3"><strong class="text-orange-600">🌟 最推荐给小白</strong></p>' +
                '<p class="text-sm text-gray-700 mb-3"><strong>🧑‍🤝‍🧑 适合什么人：</strong>完全不想看到黑乎乎的终端窗口，想要像安装微信一样，用最简单、最直观的图形界面来使用的朋友。</p>' +
                '<p class="text-sm font-medium text-gray-800 mb-2">🛠 具体安装步骤：</p>' +
                '<div class="platform-mac hidden"><div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-2 text-sm text-gray-700">前往 Claude 官网（claude.ai/download），下载对应 Mac 的版本（注意区分你的电脑是 Intel 芯片还是 Apple 芯片）。下载后双击打开，把黑色的 Claude 图标拖进"应用程序（Applications）"文件夹。</div></div>' +
                '<div class="platform-windows hidden"><div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-2 text-sm text-gray-700">前往 Claude 官网，下载 Windows 安装包（x64 或 ARM64）。下载后双击运行，一直点"下一步"直到安装完成。</div></div>' +
                '<p class="text-sm text-gray-700 mb-2"><strong>🔑 登录账号：</strong>安装好并打开 App 后，它会要求你登录。</p>' +
                '<div class="text-sm text-gray-700 space-y-1 mb-2"><div class="flex items-start gap-2"><span class="text-blue-500">🛡️</span> <span><strong>路线A的用户：</strong>直接用你注册的 Anthropic 官方账号登录。</span></div>' +
                '<div class="flex items-start gap-2"><span class="text-red-500">🚨</span> <span><strong>路线B的用户：</strong>桌面 App 需要 Anthropic 账号登录，暂时不适合你。请直接看第三种（终端CLI）方式。</span></div></div>' +
                '<div class="p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">✅ <strong>确认安装成功：</strong>登录后看到名为 "Code" 的标签页即可。</div>' +
                '</div>' +

                // Tab 2：VS Code 插件
                '<div id="m3-panel-vscode" class="install-tab-panel p-4" style="display:none">' +
                '<p class="text-sm text-gray-700 mb-3"><strong class="text-blue-600">适合想在代码编辑器里用的人</strong></p>' +
                '<p class="text-sm text-gray-700 mb-3"><strong>🧑‍🤝‍🧑 适合什么人：</strong>想要在 VS Code 里一边看代码一边让 AI 干活的朋友。</p>' +
                '<p class="text-sm font-medium text-gray-800 mb-2">🛠 具体安装步骤：</p>' +
                '<ol class="text-sm text-gray-700 space-y-2 mb-2"><li>确保电脑上安装了最新版 <strong>VS Code</strong>（版本 ≥ 1.98.0）。</li>' +
                '<li>打开 VS Code，打开"扩展"面板：' +
                '<div class="platform-mac hidden"><span class="inline-block bg-gray-100 px-2 py-0.5 rounded text-xs font-mono mt-1">Cmd + Shift + X</span></div>' +
                '<div class="platform-windows hidden"><span class="inline-block bg-gray-100 px-2 py-0.5 rounded text-xs font-mono mt-1">Ctrl + Shift + X</span></div></li>' +
                '<li>搜索 <strong>Claude Code</strong>，找到 Anthropic 官方发布的插件，点击 <strong>Install（安装）</strong>。</li></ol>' +
                '<div class="p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">✅ <strong>确认安装成功：</strong>安装完成后，右上角或左侧栏看到八爪鱼图标（Claude Code 扩展图标）。</div>' +
                '</div>' +

                // Tab 3：终端 CLI
                '<div id="m3-panel-cli" class="install-tab-panel p-4" style="display:none">' +
                '<p class="text-sm text-gray-700 mb-3"><strong class="text-green-600">适合想在命令行窗口直接用的人</strong></p>' +
                '<p class="text-sm text-gray-700 mb-3"><strong>🧑‍🤝‍🧑 适合什么人：</strong>就喜欢原汁原味的极客感，想在终端里直接敲字母下达指令的朋友。</p>' +
                '<p class="text-sm font-medium text-gray-800 mb-2">🛠 具体安装步骤：</p>' +
                '<div class="platform-mac hidden"><div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-2 text-sm text-gray-700">打开<strong>终端（Terminal）</strong>，复制这行命令粘贴进去，然后按回车：<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre></div></div>' +
                '<div class="platform-windows hidden"><div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-2 text-sm text-gray-700">务必打开 <strong>PowerShell</strong>（确认每行开头是 <code class="bg-gray-100 px-1 rounded text-xs">PS C:\\></code>），复制这行命令粘贴进去，然后按回车：<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-2 overflow-x-auto"><code>irm https://claude.ai/install.ps1 | iex</code></pre></div></div>' +
                '<div class="p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700 mb-2">⚠️ <strong>再次提醒：</strong>网上旧教程教的 <code class="bg-red-100 px-1 rounded text-xs">npm install</code> 已被官方正式弃用，绝对不要用！</div>' +
                '<div class="p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">✅ <strong>确认安装成功：</strong>等待进度条跑完后，在终端输入 <code class="bg-green-100 px-1 rounded text-xs">claude --version</code>，能看到版本号即可。</div>' +
                '</div>' +
                '</div>'
        },
        {
            // 步骤3：5个常见报错手风琴
            content: '<div class="step-title">🚨 最常见的 5 个安装报错与解决方法</div>' +
                '<div class="step-content mb-4">' +
                '<p>万一安装时卡壳了，别怕！对照下面看看是不是碰到了这些常见小坑，或者直接把报错截图发给你刚才准备好的"AI 临时客服"：</p>' +
                '</div>' +
                '<div class="error-accordion">' +
                '<details><summary>报错 1：Node.js version 18 or higher is required...</summary><div class="error-detail"><p><strong>📌 原因：</strong>电脑里的 Node.js 引擎版本太旧了，带不动 Claude Code。</p><p><strong>✅ 解决：</strong>去 Node.js 官网（nodejs.org）下载最新的安装包重新安装。⚠️ Mac 用户务必直接从官网下载，不要用 Homebrew！</p></div></details>' +
                '<details><summary>报错 2：Execution of scripts is disabled on this system...（权限不足）</summary><div class="error-detail"><p><strong>📌 原因：</strong>Windows 系统默认处于安全保护状态，禁止 PowerShell 运行外来脚本。</p><p><strong>✅ 解决（仅限 Windows）：</strong>以管理员身份运行 PowerShell，输入 <code class="bg-gray-100 px-1 rounded text-xs">Set-ExecutionPolicy RemoteSigned</code> 按回车，输入 Y 确认。关掉窗口，重新打开普通 PowerShell 再次运行安装命令。</p></div></details>' +
                '<details><summary>报错 3：fetch error, connection timeout（进度条卡住不动）</summary><div class="error-detail"><p><strong>📌 原因：</strong>你的网络连不上海外的下载服务器。</p><p><strong>✅ 解决：</strong>检查你的网络代理工具（梯子）是否正常开启，并尝试切换一个稳定的节点，然后重新输入安装命令。</p></div></details>' +
                '<details><summary>报错 4：Please open this URL in your browser to log in...（浏览器没弹出来）</summary><div class="error-detail"><p><strong>📌 原因：</strong>终端想叫浏览器弹出来让你登录，但是没叫动。</p><p><strong>✅ 解决：</strong>动动手，用鼠标把终端里显示的这串带有网址的链接复制下来，自己打开浏览器粘贴进去按回车，就能顺利登录了。</p></div></details>' +
                '<details><summary>报错 5：command not found: claude（找不到 claude 命令）</summary><div class="error-detail"><p><strong>📌 原因：</strong>安装虽然成功了，但电脑的系统还没反应过来（环境变量没更新）。</p><p><strong>✅ 解决：</strong>最简单的方法：把你现在的终端（或 PowerShell）整个关掉，重新打开一个新的窗口，再输入 claude 试试。</p></div></details>' +
                '</div>'
        },
        {
            // 步骤4：下一步去哪儿——可选模块导航卡片
            content: '<div class="step-title">🚦 下一步去哪儿？</div>' +
                '<div class="step-content mb-4">' +
                '<p>太棒了，最难的安装部分你已经搞定了！安装完成后，根据你的情况选择你的下一步：</p>' +
                '</div>' +
                '<div class="space-y-3">' +
                // 卡片A：模块3B
                '<div class="nav-card border-2 border-orange-400 bg-orange-50" onclick="app.navigateToModule(\'3b\')">' +
                '<div class="flex items-center gap-3"><span class="text-2xl">🇨🇳</span><div><p class="font-bold text-orange-800">国内用户 / 无 Claude 会员</p><p class="text-sm text-orange-600">配置智谱 GLM，在国内网络下直接用 →</p></div><span class="ml-auto text-orange-400 text-xl">→</span></div></div>' +
                // 卡片B：模块3C
                '<div class="nav-card border-2 border-blue-400 bg-blue-50" onclick="app.navigateToModule(\'3c\')">' +
                '<div class="flex items-center gap-3"><span class="text-2xl">💻</span><div><p class="font-bold text-blue-800">不习惯终端 / 想用图形界面</p><p class="text-sm text-blue-600">VS Code 使用指南，更友好的界面操作 →</p></div><span class="ml-auto text-blue-400 text-xl">→</span></div></div>' +
                // 卡片C：跳过可选模块，直接进入模块4
                '<div class="nav-card border-2 border-green-400 bg-green-50" onclick="app.navigateToModule(\'4\')">' +
                '<div class="flex items-center gap-3"><span class="text-2xl">✅</span><div><p class="font-bold text-green-800">直接开始学习</p><p class="text-sm text-green-600">跳过可选模块，进入模块4 →</p></div><span class="ml-auto text-green-400 text-xl">→</span></div></div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '关于安装方式，下面哪种说法是最正确的？',
            options: [
                { text: '我必须把桌面 App、VS Code 插件和终端 CLI 三个都装好才能用。' },
                { text: '网上的老教程说用 npm 安装，我应该听老教程的。' },
                { text: '桌面 App、VS Code 插件和终端 CLI 这三种方式，我只需要根据自己的习惯挑选其中一种安装就可以了。' }
            ],
            correct: 2,
            successMsg: '没错！三种安装方式只需选一种即可，不需要全装。',
            explanation: 'Claude Code 提供三种安装方式：桌面 App（最推荐小白）、VS Code 插件（适合在编辑器中使用）、终端 CLI（适合喜欢命令行的用户）。三种方式选一种最适合自己的就行。'
        },
        {
            question: '在 Windows 上用第三种（终端 CLI）方式安装时，教程强调必须使用哪个工具？',
            options: [
                { text: '必须使用带 PS C:\\> 开头的 PowerShell。' },
                { text: '必须使用传统的 CMD 命令提示符。' },
                { text: '必须使用微信去下载。' }
            ],
            correct: 0,
            successMsg: '没错！Windows 安装时必须使用 PowerShell，不要用旧版 CMD。',
            explanation: 'Windows 用户必须使用 PowerShell（开头显示 PS C:\\>），而不是旧版的 CMD（只显示 C:\\>）。PowerShell 是更现代化的命令行工具，Claude Code 的安装脚本专为它设计。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['3'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_3.steps, '', MODULE_3.id, {
        nextModuleId: '4',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_3.id, MODULE_3.quiz, function() {
                RatingModal.checkAndShow('3', function() {
                    stepViewer.showNextModuleButton(nextBtnId);
                });
            });
        }
    });

    // 每次渲染后应用平台切换（安装方式Tab内含平台特定内容）
    var originalRenderAllSteps = stepViewer.renderAllSteps.bind(stepViewer);
    stepViewer.renderAllSteps = function() {
        originalRenderAllSteps();
        if (window.platformSwitcher) window.platformSwitcher.applyPlatform();
    };
};
