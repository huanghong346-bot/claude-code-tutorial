// 可选模块3C：VS Code图形界面指南
var MODULE_3C = {
    id: '3c',
    title: 'VS Code指南',
    steps: [
        {
            content: '<div class="step-title">第1步：下载并安装 VS Code <span class="progress-badge">20%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">💡 <strong>重要提醒：</strong>如果你在模块3里选择了桌面App或者终端CLI，并且用得挺顺手的，这个模块可以<strong>完全跳过</strong>。如果你对着黑色终端窗口感到不舒服，或者平时已经在用 VS Code 写代码，那这个模块非常适合你。</p>' +
                '<p class="mb-3"><strong>VS Code 是什么？</strong>全称 Visual Studio Code，微软出的免费代码编辑器，全球几千万开发者在用，可以理解为代码界的<strong>"Word 文档"</strong>。</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">📥 下载安装</p>' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">' +
                '<li>打开浏览器，访问 <strong>code.visualstudio.com</strong>，点显眼的下载按钮</li>' +
                '<li><strong>版本要求：</strong>必须是 <strong>1.98.0</strong> 或更新版本（已安装的可在菜单栏"帮助"→"关于"查看）</li>' +
                '</ol>' +
                '<div class="platform-mac hidden"><p class="text-sm text-gray-700 mt-2">🍎 Mac：下载后双击解压，把蓝色图标拖进"应用程序（Applications）"文件夹。</p></div>' +
                '<div class="platform-windows hidden"><p class="text-sm text-gray-700 mt-2">🪟 Windows：双击安装包，一路点"下一步"直到完成。</p></div>' +
                '</div>' +

                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm">' +
                '<strong>💡 重要账号提醒：</strong>路线A用户等下直接登录即可。路线B用户请务必先完成【模块3B】的配置，再回来使用 VS Code。' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第2步：安装 Claude Code 扩展 <span class="progress-badge">40%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3"><strong>扩展（Extension）是什么？</strong>就像给手机装 App，或者给浏览器装广告拦截插件一样，在 VS Code 里装"扩展"就是为了让它多出一个新功能。</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">🛠 具体步骤</p>' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">' +
                '<li>打开装好的 VS Code 软件</li>' +
                '<li>在左侧竖条边栏找到<strong>四个小积木方块图标</strong>（扩展市场），点击它' +
                '<div class="platform-mac hidden"><span class="inline-block bg-gray-100 px-2 py-0.5 rounded text-xs font-mono mt-1 ml-5">快捷键：Cmd + Shift + X</span></div>' +
                '<div class="platform-windows hidden"><span class="inline-block bg-gray-100 px-2 py-0.5 rounded text-xs font-mono mt-1 ml-5">快捷键：Ctrl + Shift + X</span></div></li>' +
                '<li>搜索框输入 <strong>Claude Code</strong></li>' +
                '<li>找到 <strong>Anthropic 官方发布</strong>的插件，点击 <strong>Install（安装）</strong></li>' +
                '</ol>' +
                '<p class="text-sm text-red-600 font-medium mt-2">⚠️ 市场里可能有名字类似的个人作品，千万不要装错，认准官方！</p>' +
                '</div>' +

                '<div class="p-3 bg-green-50 rounded-lg border border-green-200 text-sm text-green-700">' +
                '<strong>🎉 装好没？</strong>安装完后，左侧栏或右上角会出现一个<strong>八爪鱼图标（Claude Code 扩展图标）<img src="images/claude-code-icon.png" alt="Claude Code 图标" class="inline-block w-6 h-6 align-middle mx-0.5"></strong>，这就是 Claude Code 的专属入口！这个扩展已包含所需核心工具，不需要再单独安装终端程序。' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第3步：登录并完成初始设置 <span class="progress-badge">60%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">点击八爪鱼图标，它会要求你授权登录。点击登录按钮，电脑会自动弹出浏览器网页。</p>' +

                // 路线A
                '<div class="route-fork route-fork-a">' +
                '<p class="font-bold text-blue-800 mb-1">🛡️ 路线A用户（有 Claude 官方账号）</p>' +
                '<p class="text-sm text-blue-700">直接用你注册的 Anthropic 账号登录授权即可。非常简单！</p>' +
                '</div>' +

                // 路线B
                '<div class="route-fork route-fork-b">' +
                '<p class="font-bold text-orange-800 mb-1">🚨 路线B用户特别注意</p>' +
                '<p class="text-sm text-orange-700 mb-2">这是一个已知的小坑：VS Code 扩展有时不能可靠地读取第三方 API 配置，所以你大概率会被登录界面挡住。</p>' +
                '<div class="mt-2 space-y-2">' +
                '<div class="p-2 bg-white rounded border border-green-200 text-sm"><strong>方法一（🌟 强烈推荐）：</strong>不要直接双击桌面图标打开 VS Code。先打开终端，输入 <code class="bg-gray-100 px-1 rounded text-xs">code .</code>（注意 code 和 . 中间有空格）按回车。这样 VS Code 会"继承"终端里已配好的 GLM 身份，自动绕过登录！</div>' +
                '<div class="p-2 bg-white rounded border border-gray-200 text-sm"><strong>方法二（备选）：</strong>打开 VS Code 设置（Mac: <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Cmd + ,</kbd>，Windows: <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Ctrl + ,</kbd>），搜索 "Claude Code login"，找到 "Disable Login Prompt" 选项打上勾。</div>' +
                '</div></div>' +

                '<div class="error-accordion mt-3">' +
                '<details><summary>🚨 找不到八爪鱼图标怎么办？</summary><div class="error-detail"><p><strong>原因1：</strong>没有打开任何文件！在 VS Code 里必须打开一个具体文件（不能只打开空文件夹），八爪鱼图标才会显示。</p><p><strong>原因2：</strong>软件卡住了。按 <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Ctrl+Shift+P</kbd>（Mac: Cmd+Shift+P），输入 <code class="bg-gray-100 px-1 rounded text-xs">Developer: Reload Window</code> 回车刷新。</p></div></details>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第4步：认识 VS Code 里的 Claude Code 界面 <span class="progress-badge">80%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">点开八爪鱼图标，你会看到一个类似聊天软件的侧边栏。来认识几个最核心的元素：</p>' +

                '<div class="space-y-3">' +
                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200">' +
                '<p class="font-medium text-gray-800 text-sm mb-1">💬 对话框（发号施令的地方）</p><p class="text-sm text-gray-600">最下面的输入框。你想让它干嘛，就在这里用大白话打字发送。</p></div>' +

                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200">' +
                '<p class="font-medium text-gray-800 text-sm mb-1">📍 @ 符号（划重点功能）</p><p class="text-sm text-gray-600">输入 @ 再跟文件名（比如 <code class="bg-gray-100 px-1 rounded text-xs">@app.py</code>），就是告诉 Claude："干活前先仔细看看这个文件！"相当于开会时把资料直接递到员工手里。</p></div>' +

                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200">' +
                '<p class="font-medium text-gray-800 text-sm mb-1">📝 Plan Mode（计划模式）</p><p class="text-sm text-gray-600">"先审计划再动工"。Claude 不会直接瞎改代码，而是先用文字写一份施工计划给你看，你点头确认后才开始写。<strong>强烈推荐小白使用</strong>，防止把文件改乱！</p></div>' +

                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200">' +
                '<p class="font-medium text-gray-800 text-sm mb-1">🔍 Diff 查看器（代码对比器）</p><p class="text-sm text-gray-600">代码写好后编辑器出现左右两半屏幕，像 Word 修订模式：<span class="text-red-500">左边红色是旧代码</span>，<span class="text-green-500">右边绿色是新代码</span>。</p></div>' +

                '<div class="p-3 bg-gray-50 rounded-lg border border-gray-200">' +
                '<p class="font-medium text-gray-800 text-sm mb-1">✅ Accept / ❌ Reject（接受 / 拒绝）</p><p class="text-sm text-gray-600">在 Diff 查看器上方：改得好点 Accept，一塌糊涂点 Reject，文件毫发无损恢复原样。</p></div>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第5步：发出第一个任务试试手 <span class="progress-badge">100%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">趁热打铁，让我们在可视化界面里感受一下它的魔力！</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside mb-2">' +
                '<li>在 VS Code 里新建空白文本文件，命名为 <strong>test.txt</strong> 并保存</li>' +
                '<li>保持文件打开状态，点击左侧八爪鱼图标呼出 Claude Code</li>' +
                '<li>在底部输入框里发送一段中文指令，比如：<strong>"帮我在这个test.txt文件里写一首关于编程的简短打油诗"</strong></li>' +
                '</ol>' +
                '<p class="text-sm text-gray-700">界面上会快速滚动思考过程，接着编辑器弹出对比画面。点击上方 <strong>Accept（接受）</strong>——看看你的 test.txt，是不是多出了一首诗？<strong>它能帮你写诗，就能帮你写几百行的网站代码！</strong></p>' +
                '</div>' +

                '<p class="text-sm font-medium text-gray-800 mb-2">🚨 常见问题排雷</p>' +
                '<div class="error-accordion">' +
                '<details><summary>装了扩展还是找不到八爪鱼图标？</summary><div class="error-detail"><p>除了必须"打开一个文件"和"Reload Window"之外，确认 VS Code 版本 ≥ 1.98.0（菜单栏 帮助 → 关于查看）。</p></div></details>' +
                '<details><summary>它和其他 AI 助手（Copilot / Cline）打架？</summary><div class="error-detail"><p>如果装了其他 AI 插件，可能出现快捷键冲突。新手建议在左侧扩展市场里把其他 AI 插件暂时<strong>禁用（Disable）</strong>。</p></div></details>' +
                '<details><summary>Windows 提示"受限模式"或无法修改文件？</summary><div class="error-detail"><p>Windows 会为安全阻止不认识的代码运行。用 VS Code 打开文件夹时如果弹出"是否信任此工作区中的作者？"，务必勾选并点<strong>"是，我信任此作者"</strong>，否则 Claude 会被束缚手脚。</p></div></details>' +
                '</div>' +

                '<div class="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-300 text-center">' +
                '<p class="text-lg font-bold text-blue-800 mb-1">🌟 条条大路通罗马！</p>' +
                '<p class="text-sm text-blue-700">不管是用终端敲字还是在 VS Code 里点按钮，从模块4开始，所有教学内容对你都百分之百适用！准备好开始真正的 AI 编程之旅了吗？</p>' +
                '</div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '在 VS Code 中使用 Claude Code 时，如果你输入了 @index.html，这是在告诉 AI 什么？',
            options: [
                { text: '这是我的邮箱地址，请把写好的代码发给我。' },
                { text: '这是一个特殊指令，告诉 Claude 先阅读和关注 index.html 这个文件，把它作为接下来干活的参考资料。' },
                { text: '这是给 AI 重新起了一个英文名。' }
            ],
            correct: 1,
            successMsg: '没错！@ 符号是让 Claude 重点关注指定文件的内容。',
            explanation: '@ 符号让你可以"at"（提及）某个文件，Claude 会读取该文件的完整内容，把它作为接下来工作的重要参考资料。这是非常实用的划重点功能。'
        },
        {
            question: '路线B（使用智谱 GLM）的用户，在打开 VS Code 遇到登录界面卡住时，最推荐的解决办法是？',
            options: [
                { text: '放弃使用，必须去花 20 美元买官方会员。' },
                { text: '在聊天框里直接把密码发给 AI。' },
                { text: '关闭软件，在终端（命令行）里通过输入 code . 来启动 VS Code，让它自动继承终端里的配置并绕过登录。' }
            ],
            correct: 2,
            successMsg: '没错！用 code . 命令启动 VS Code 可以继承终端配置，绕过登录界面。',
            explanation: '在终端里输入 code . 启动 VS Code 会"继承"终端的环境变量，这让 VS Code 能读取到模块3B中配置的智谱 GLM 设置，从而自动绕过 Anthropic 的登录界面。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['3c'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_3C.steps, '', MODULE_3C.id, {
        nextModuleId: '4',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_3C.id, MODULE_3C.quiz, function() {
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
