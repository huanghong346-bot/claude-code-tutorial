// 可选模块3B：国内用户配置智谱GLM
var MODULE_3B = {
    id: '3b',
    title: '配置智谱GLM',
    steps: [
        {
            content: '<div class="step-title">第1步：注册智谱账号 <span class="progress-badge">20%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">💡 <strong>必看提示：</strong>如果你已经有 Claude 官方账号并且愿意付费，请直接跳过本模块进入【模块4】。本模块专为在国内无法顺畅使用 Claude 官方服务，或者不想花钱买昂贵 Claude 会员的朋友准备。</p>' +
                '<p class="mb-3">恭喜你！到这里，你已经成功把 Claude Code 这双超级干活的"手脚"安装到你的电脑里了！现在，我们要给它接上一个在国内可以直接使用、而且非常聪明的<strong>"大脑"</strong>。</p>' +
                '<p class="mb-3">还记得我们在模块一打的比方吗？Claude Code 只是一个干活的工具，它背后用什么 AI 模型来思考是可以灵活替换的。今天，我们就用国内顶尖的<strong>智谱 GLM</strong>来做这个大脑——它是中国 AI 公司智谱开发的大模型，专门为 Claude Code 推出了"GLM Coding 编程套餐"。它<strong>不需要网络代理，不需要境外信用卡</strong>，在国内网络下直接就能用，而且价格比 Claude 官方会员便宜得多！</p>' +
                '<p class="mb-3">不用担心配置过程，这就像给新买的手机插上 SIM 卡一样简单。我们开始吧！</p>' +

                '<div class="p-4 bg-blue-50 rounded-lg border border-blue-200">' +
                '<p class="font-medium text-blue-800 mb-2">📝 去哪里注册</p>' +
                '<p class="text-sm text-blue-700 mb-1">在浏览器中打开 <strong>智谱AI开放平台（bigmodel.cn）</strong></p>' +
                '<p class="text-sm text-blue-700 mb-1">点击右上角的"登录/注册"，直接用你的<strong>中国大陆手机号</strong>接收验证码即可注册。</p>' +
                '</div>' +

                '<div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">' +
                '<p class="text-sm text-green-700"><strong>💰 关于免费额度：</strong>智谱通常会给新注册用户赠送一定的免费额度（Token 体验金）。注册登录后，在网页右上角点击头像，进入"控制台"或"财务中心"即可查看余额。</p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第2步：获取并保存 API Key <span class="progress-badge">40%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3"><strong>什么是 API Key？</strong>你可以把它理解成你的<strong>"专属银行卡号兼身份证"</strong>。当 Claude Code 呼叫智谱的"大脑"来干活时，它必须出示这串钥匙，智谱才知道是谁在用并从账户扣费。</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">🔑 在哪里找到它</p>' +
                '<ol class="text-sm text-gray-700 space-y-1 list-decimal list-inside">' +
                '<li>登录智谱控制台后，在左侧菜单栏找到 <strong>"API Keys"</strong>（或者叫"密钥管理"）</li>' +
                '<li>点击"添加新的 API Key"按钮，系统会生成一串长长的英文字符</li>' +
                '</ol>' +
                '</div>' +

                '<div class="p-4 bg-red-50 border-2 border-red-300 rounded-lg">' +
                '<p class="font-medium text-red-800 mb-1">🚨 超级重要提醒</p>' +
                '<p class="text-sm text-red-700">生成 Key 后请点击<strong>"复制"按钮</strong>妥善保存。<strong>这就是你的计费凭证，千万不要发给别人，以免被盗刷！</strong></p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第3步：配置 Claude Code 使用 GLM <span class="progress-badge">60%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-4">这是最关键的一步，我们要把大脑"钥匙"装进 Claude Code 的口袋里。需要修改一个名为 <strong>settings.json</strong> 的文件。请根据你的电脑系统选择：</p>' +

                '<div class="platform-mac hidden">' +
                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">🍎 Mac / Linux（一键脚本）</p>' +
                '<ol class="text-sm text-gray-700 space-y-1 list-decimal list-inside mb-2">' +
                '<li>打开<strong>终端（Terminal）</strong></li>' +
                '<li>复制下面整段代码粘贴进去</li>' +
                '</ol>' +
                '<p class="text-sm text-red-600 font-medium mb-2">⚠️ 粘贴前把 <code class="bg-red-100 px-1 rounded text-xs">你的智谱API_Key</code> 替换成真实钥匙！</p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg overflow-x-auto"><code>mkdir -p ~/.claude && cat > ~/.claude/settings.json << \'EOF\'' +
'\n{' +
'\n  "env": {' +
'\n    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",' +
'\n    "ANTHROPIC_AUTH_TOKEN": "你的智谱API_Key",' +
'\n    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",' +
'\n    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",' +
'\n    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"' +
'\n  }' +
'\n}' +
'\nEOF</code></pre>' +
                '<p class="text-sm text-gray-700 mt-2">按回车，没有错误提示就配置成功！</p>' +
                '</div></div>' +

                '<div class="platform-windows hidden">' +
                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">🪟 Windows（手动修改）</p>' +
                '<ol class="text-sm text-gray-700 space-y-1 list-decimal list-inside mb-2">' +
                '<li>按 <kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Win + R</kbd>，输入 <code class="bg-gray-100 px-1 rounded text-xs">%USERPROFILE%\\.claude</code> 回车</li>' +
                '<li>找到或新建 <code class="bg-gray-100 px-1 rounded text-xs">settings.json</code> 文件</li>' +
                '<li>右键用记事本打开，清空后粘贴下面代码</li>' +
                '</ol>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg overflow-x-auto"><code>{' +
'\n  "env": {' +
'\n    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",' +
'\n    "ANTHROPIC_AUTH_TOKEN": "你的智谱API_Key",' +
'\n    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",' +
'\n    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",' +
'\n    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"' +
'\n  }' +
'\n}</code></pre>' +
                '<p class="text-sm text-gray-700 mt-2">把 <code class="bg-gray-100 px-1 rounded text-xs">你的智谱API_Key</code> 替换成真实钥匙，<kbd class="px-1 py-0.5 bg-gray-200 rounded text-xs">Ctrl + S</kbd> 保存。</p>' +
                '</div></div>' +

                '<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm text-blue-700">' +
                '<strong>💡 说明：</strong><code class="bg-blue-100 px-1 rounded text-xs">ANTHROPIC_AUTH_TOKEN</code> 填 API Key，<code class="bg-blue-100 px-1 rounded text-xs">ANTHROPIC_BASE_URL</code> 告诉 Claude Code 把请求发给智谱。' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第4步：验证配置是否成功 <span class="progress-badge">80%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">设置好了？我们来检查大脑接通没有！</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">' +
                '<li><strong>关掉所有旧终端窗口</strong>，重新打开全新的终端（Windows 打开全新 PowerShell）</li>' +
                '<li>输入 <code class="bg-gray-100 px-1 rounded text-xs">claude</code> 回车启动（如问是否使用 API Key，输入 Y 确认）</li>' +
                '<li>出现 <code class="bg-gray-100 px-1 rounded text-xs">></code> 提示符后，输入 <code class="bg-gray-100 px-1 rounded text-xs">/status</code> 回车</li>' +
                '</ol>' +
                '</div>' +

                '<div class="p-3 bg-green-50 rounded-lg border border-green-200 mb-3">' +
                '<p class="font-medium text-green-800 mb-1">🎉 看到这些就成功了：</p>' +
                '<ul class="text-sm text-green-700 space-y-0.5"><li><strong>Current model: glm-4.7</strong></li><li><strong>Base URL: https://open.bigmodel.cn/api/anthropic</strong></li></ul>' +
                '</div>' +

                '<div class="error-accordion">' +
                '<details><summary>问题1：启动后还是弹网页要我登录 Claude？</summary><div class="error-detail"><p>改完配置文件后，必须把终端<strong>彻底关掉重新打开</strong>！老窗口不识别新配置。</p></div></details>' +
                '<details><summary>问题2：Windows 报错无法读取 JSON 文件？</summary><div class="error-detail"><p>JSON 格式严格，检查双引号 <code class="bg-gray-100 px-1 rounded text-xs">"</code> 和逗号 <code class="bg-gray-100 px-1 rounded text-xs">,</code> 是否被误删。不行就删光重粘。</p></div></details>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">第5步：发出第一个指令 <span class="progress-badge">100%</span></div>' +
                '<div class="step-content">' +
                '<p class="mb-3">你的 Claude Code 已装上国产最强大脑！来试试第一个指令：</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="text-sm text-gray-700 mb-2">在终端的 <code class="bg-gray-100 px-1 rounded text-xs">></code> 提示符后输入：</p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg overflow-x-auto"><code>在当前文件夹下，帮我新建一个文本文件，名字叫"hello.txt"，里面写上一句"你好！这是我的第一个AI生成的代码文件！"</code></pre>' +
                '</div>' +

                '<p class="text-sm text-gray-700 mb-3">稍等几秒，看到屏幕上字在飞速滚动。如果弹出权限请求（Permission requested），按 <strong>Enter</strong> 同意。</p>' +
                '<p class="text-sm text-gray-700 mb-3">完成后打开文件夹看看——<strong>真的多了一个文件，里面的字也写好了！它真的可以自动干活了！</strong></p>' +

                '<div class="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-300 text-center">' +
                '<p class="text-lg font-bold text-orange-800 mb-1">🌟 恭喜完成！</p>' +
                '<p class="text-sm text-orange-700">从下个模块开始，所有教学内容对你完全适用。不管背后模型是 Claude 还是智谱 GLM，操作方式一模一样！</p>' +
                '</div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '在我们把智谱 GLM 接入 Claude Code 时，必须在设置文件里填写的 API Key 相当于什么？',
            options: [
                { text: '相当于一个魔法口令，填进去就能让电脑性能翻倍。' },
                { text: '相当于你的"银行卡号兼身份证"，用来向智谱证明是你在调用大模型，并根据实际使用量来扣除费用。' },
                { text: '相当于一个免费的账号密码，随便在网上搜一个填进去就能一直白嫖。' }
            ],
            correct: 1,
            successMsg: '没错！API Key 就是你的专属计费凭证，一定要妥善保管不要泄露。',
            explanation: 'API Key 是调用大模型的"身份凭证+计费钥匙"。每次调用都会从你的账户扣除相应费用，所以千万不要泄露给他人。'
        },
        {
            question: '当你修改完 settings.json 配置文件后，最重要的一步验证操作是什么？',
            options: [
                { text: '马上重启整台电脑，不然肯定不管用。' },
                { text: '直接在原来的黑色窗口里继续打字。' },
                { text: '彻底关闭旧的终端窗口，重新打开一个新的终端，运行 claude 并输入 /status 检查是否成功显示了 glm 模型和智谱的地址。' }
            ],
            correct: 2,
            successMsg: '没错！必须关闭旧终端重新打开新的，然后运行 /status 验证。',
            explanation: '修改配置文件后，旧的终端窗口不会自动加载新配置。必须彻底关闭重新打开，然后用 /status 命令检查模型地址是否指向智谱。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['3b'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_3B.steps, '', MODULE_3B.id, {
        nextModuleId: '4',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_3B.id, MODULE_3B.quiz, function() {
                // 替换默认单一按钮为双导航卡片
                var nextBtnArea = document.getElementById(nextBtnId);
                if (nextBtnArea) {
                    nextBtnArea.style.display = 'block';
                    nextBtnArea.innerHTML =
                        '<div class="space-y-3">' +
                        '<div class="nav-card border-2 border-blue-400 bg-blue-50" onclick="app.navigateToModule(\'3c\')">' +
                        '<div class="flex items-center gap-3"><span class="text-2xl">💻</span><div><p class="font-bold text-blue-800">还想了解 VS Code 图形界面</p><p class="text-sm text-blue-600">进入模块3C →</p></div><span class="ml-auto text-blue-400 text-xl">→</span></div></div>' +
                        '<div class="nav-card border-2 border-green-400 bg-green-50" onclick="app.navigateToModule(\'4\')">' +
                        '<div class="flex items-center gap-3"><span class="text-2xl">✅</span><div><p class="font-bold text-green-800">直接开始学习</p><p class="text-sm text-green-600">进入模块4 →</p></div><span class="ml-auto text-green-400 text-xl">→</span></div></div>' +
                        '</div>';
                    setTimeout(function() { nextBtnArea.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
                }
            });
        }
    });

    var originalRenderAllSteps = stepViewer.renderAllSteps.bind(stepViewer);
    stepViewer.renderAllSteps = function() {
        originalRenderAllSteps();
        if (window.platformSwitcher) window.platformSwitcher.applyPlatform();
    };
};
