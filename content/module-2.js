// 模块2：安装前的准备
// 醒目提示框Tab切换
window._m2_switchRoute = function(route) {
    var tabA = document.getElementById('m2-tab-a');
    var tabB = document.getElementById('m2-tab-b');
    var contentA = document.getElementById('m2-route-a-content');
    var contentB = document.getElementById('m2-route-b-content');

    if (route === 'a') {
        tabA.className = 'callout-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-blue-500 text-white';
        tabB.className = 'callout-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-300';
        contentA.style.display = 'block';
        contentB.style.display = 'none';
    } else {
        tabA.className = 'callout-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-300';
        tabB.className = 'callout-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-green-500 text-white';
        contentA.style.display = 'none';
        contentB.style.display = 'block';
    }
};

var MODULE_2 = {
    id: '2',
    title: '安装前的准备',
    steps: [
        {
            // 步骤1：国内用户特别提示 + 过渡
            content: '<div class="step-title">💡 国内用户特别提示（注册前必看）</div>' +
                '<div class="step-content">' +
                '嘿！在你开始动手注册之前，我想先和你交个底。由于一些网络环境的原因，在中国大陆使用 Claude，通常有两条路可以走。建议你先花一分钟看看现实情况，再决定自己要走哪条路。' +
                '</div>' +

                // 醒目提示框：路线选择
                '<div class="callout-box my-5 border-2 border-orange-400 rounded-xl overflow-hidden">' +
                '<div class="callout-tabs">' +
                // Tab标签
                '<div class="flex border-b border-orange-200 bg-orange-50 px-3 pt-3 gap-1">' +
                '<span id="m2-tab-a" class="callout-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-blue-500 text-white" onclick="window._m2_switchRoute(\'a\')">🛡️ 路线A：原汁原味</span>' +
                '<span id="m2-tab-b" class="callout-tab-label inline-block px-4 py-2 rounded-t-lg font-medium text-sm cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-300" onclick="window._m2_switchRoute(\'b\')">🚀 路线B：省心省力（推荐）</span>' +
                '</div>' +

                // 路线A内容
                '<div id="m2-route-a-content" class="callout-tab-panel p-4" style="display:block">' +
                '<p class="text-sm text-gray-700 mb-3">如果你想体验<strong>官方的 Claude AI</strong>，你需要克服几个门槛：</p>' +
                '<ul class="space-y-2 text-sm text-gray-700">' +
                '<li class="flex items-start gap-2"><span class="text-blue-500 font-bold flex-shrink-0">📡</span> <span><strong>网络要求：</strong>访问官方网站需要稳定的网络代理工具（即俗称的"梯子"）。教程不提供这类工具，需自行搜索解决。</span></li>' +
                '<li class="flex items-start gap-2"><span class="text-blue-500 font-bold flex-shrink-0">📧</span> <span><strong>邮箱要求：</strong>必须使用境外邮箱注册。首推 <strong>Gmail</strong>，备选 <strong>ProtonMail</strong>（注册不需要手机号）。<span class="text-red-500 font-medium">QQ邮箱、163邮箱等国内邮箱无法收到验证码，绝对不能用！</span></span></li>' +
                '<li class="flex items-start gap-2"><span class="text-blue-500 font-bold flex-shrink-0">📱</span> <span><strong>手机号验证：</strong>注册时大概率需要验证海外手机号，国内手机号行不通。需自行搜索并使用"海外手机接码平台"（质量参差不齐，请多看评价，不做具体推荐）。</span></li>' +
                '<li class="flex items-start gap-2"><span class="text-blue-500 font-bold flex-shrink-0">⚠️</span> <span><strong>封号风险提醒：</strong>注册和日常使用时，尽量保持在同一个稳定的网络节点。如果 IP 地址频繁切换，账号很容易触发风控被封禁。</span></li>' +
                '</ul>' +
                '<div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">' +
                '<p class="text-sm font-medium text-blue-800 mb-2">📋 路线A注册检查清单：</p>' +
                '<div class="text-sm text-blue-700 space-y-1">' +
                '<div class="flex items-center gap-2"><span class="text-blue-400">☐</span> 稳定的网络代理工具（自行解决）</div>' +
                '<div class="flex items-center gap-2"><span class="text-blue-400">☐</span> Gmail 或 ProtonMail 邮箱（不能用国内邮箱）</div>' +
                '<div class="flex items-center gap-2"><span class="text-blue-400">☐</span> 海外手机接码服务（自行搜索，注意挑选口碑好的）</div>' +
                '<div class="flex items-center gap-2"><span class="text-blue-400">☐</span> 准备好浏览器的无痕/隐身模式（注册时使用）</div>' +
                '</div></div>' +
                '</div>' +

                // 路线B内容
                '<div id="m2-route-b-content" class="callout-tab-panel p-4" style="display:none">' +
                '<p class="text-sm text-gray-700 mb-3"><strong>你完全可以跳过注册 Claude 账号这一步！</strong></p>' +
                '<p class="text-sm text-gray-700 mb-3">还记得我们在模块一打的比方吗？Claude Code 只是干活的"手脚"，它本身不需要 Claude 官方账号也能运行。只要配置好<strong>国内可以直接访问的 AI 服务</strong>（比如智谱 GLM）作为"头脑"，它就能正常为你工作。</p>' +
                '<div class="space-y-2 text-sm text-gray-700 mb-3">' +
                '<div class="flex items-start gap-2"><span class="text-green-500 font-bold flex-shrink-0">✅</span> <span><strong>怎么做：</strong>完成安装步骤后，直接跳到<strong>【模块3B：国内用户配置指南】</strong>，手把手教你怎么接上智谱 GLM，不需要任何境外账号，也不需要代理工具。</span></div>' +
                '<div class="flex items-start gap-2"><span class="text-green-500 font-bold flex-shrink-0">✅</span> <span><strong>好用吗：</strong>放心，路线B绝对不是将就！智谱 GLM 的编程能力在中国大模型里属于第一梯队，对付新手的日常使用完全够用了。</span></div>' +
                '</div>' +
                '<div class="p-3 bg-green-50 rounded-lg border border-green-200 text-sm text-green-700">' +
                '<strong>💰 省钱提示：</strong>路线B只需去智谱 AI 开放平台（open.bigmodel.cn）注册免费账号，获取 API Key，按实际用量花点小钱（甚至一开始有免费额度），无需境外信用卡！' +
                '</div>' +
                '</div>' +

                // 底部路径引导
                '<div class="border-t border-orange-200 bg-orange-50 px-4 py-3">' +
                '<p class="text-sm text-orange-800 font-medium mb-1">🎯 选好了吗？</p>' +
                '<div class="text-sm text-orange-700">' +
                '<div>→ <strong>走路线A：</strong>继续完成本模块的注册步骤</div>' +
                '<div>→ <strong>走路线B：</strong>完成安装后跳到<a href="#3b" class="text-green-600 underline font-medium">【模块3B】</a></div>' +
                '</div></div>' +
                '</div></div>' +

                '<div class="step-content mt-4">' +
                '<p>太棒了！现在我们都要开始做些实际的准备工作了。对于完全不懂编程的朋友来说，这一步可能会出现一些你没见过的新名词，但别担心——其实它们就像手机里的一个个基础 App 一样简单。跟着我一步步来，我们把该准备的"工具"都备齐。</p>' +
                '</div>'
        },
        {
            // 步骤2：你需要有一个账号
            content: '<div class="step-title">① 你需要有一个账号（官方账号或国内平替账号）</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">还记得我们刚才说的两条路线吗？</p>' +
                '<div class="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">' +
                '<p class="font-medium text-blue-800 mb-2">🛡️ 如果你选了<strong>路线A（官方原味版）</strong>：</p>' +
                '<p class="text-sm text-blue-700">你需要去 Anthropic 官网（console.anthropic.com 或 claude.ai）注册一个账号。路线A有两种付费方式：</p>' +
                '<ul class="text-sm text-blue-700 mt-2 space-y-1">' +
                '<li>① 开通 <strong>Claude Pro 会员</strong>（每月20美元，有使用额度限制）</li>' +
                '<li>② 注册 Anthropic 账号后绑定信用卡，申请 <strong>API Key</strong>（一串专属的计费钥匙）按实际用量付费</li>' +
                '</ul>' +
                '<p class="text-sm text-red-600 mt-2 font-medium">⚠️ 特别提醒：这两种方式都需要<strong>境外信用卡</strong>，国内的银联卡通常是无法支付的。</p>' +
                '</div>' +
                '<div class="p-4 bg-green-50 rounded-lg border border-green-200">' +
                '<p class="font-medium text-green-800 mb-2">🚀 如果你选了<strong>路线B（国内省心版）</strong>：</p>' +
                '<p class="text-sm text-green-700">你完全不需要去 Anthropic 注册账号，也不用发愁境外信用卡！你只需要去<strong>智谱 AI 开放平台（open.bigmodel.cn）</strong>注册一个免费账号，获取一个 API Key，按你实际干了多少活来花点小钱（甚至一开始有免费额度）就可以了。</p>' +
                '</div>' +
                '</div>'
        },
        {
            // 步骤3：终端是什么——带Mac/Windows平台切换
            content: '<div class="step-title">② 终端是什么、在哪里找到它？</div>' +
                '<div class="step-content">' +
                '<p class="mb-4">终端（就是电脑里那个黑色或蓝色的命令行窗口，你在电影里常看到黑客在上面敲满屏英文字母的东西），其实一点都不高深。我们平时习惯用鼠标去点文件夹，而"终端"只是换了一种方式——<strong>用打字的方式来指挥电脑干活</strong>。Claude Code 接下来就会住在这个窗口里。</p>' +
                '<p class="font-medium text-gray-800 mb-3">找它的方法很简单：</p>' +

                // Mac平台内容
                '<div class="platform-mac hidden">' +
                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">🍎 <strong>如果你用 Mac：</strong></p>' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">' +
                '<li>在键盘上同时按下 <kbd class="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">Command</kbd> + <kbd class="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">空格键</kbd>，呼出电脑的搜索框。</li>' +
                '<li>在搜索框里输入<strong>"终端"</strong>或者<strong>"Terminal"</strong>。</li>' +
                '<li>看到一个黑色的正方形小图标，按下回车键点开它。恭喜，你成功打开了终端！</li>' +
                '</ol>' +
                '</div></div>' +

                // Windows平台内容
                '<div class="platform-windows hidden">' +
                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">' +
                '<p class="font-medium text-gray-800 mb-2">🪟 <strong>如果你用 Windows：</strong></p>' +
                '<ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">' +
                '<li>按下键盘左下角的 <kbd class="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">Windows徽标键</kbd>（或者点击屏幕左下角的开始菜单）。</li>' +
                '<li>在搜索框里输入<strong>"PowerShell"</strong>或者<strong>"cmd"（命令提示符）</strong>。</li>' +
                '<li>看到一个蓝色或黑色的图标，点击它或按回车键打开。恭喜，这就是你的终端了！</li>' +
                '</ol>' +
                '<div class="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">' +
                '<strong>⚠️ Windows用户注意：</strong>如果你看到 PowerShell 窗口里开头显示 <code class="bg-yellow-100 px-1 rounded text-xs">PS C:\\></code>，那就是 PowerShell；如果只显示 <code class="bg-yellow-100 px-1 rounded text-xs">C:\\></code>，那是命令提示符（CMD）。<strong>后续安装步骤中我们强烈推荐使用 PowerShell。</strong>' +
                '</div>' +
                '</div></div>' +

                '</div>'
        },
        {
            // 步骤4：Node.js
            content: '<div class="step-title">③ Node.js 是什么、怎么确认有没有装？</div>' +
                '<div class="step-content">' +
                '<p class="mb-3"><strong>Node.js</strong>（一个能让代码在你的电脑上直接跑起来的"运行引擎"或"翻译环境"）。</p>' +
                '<p class="mb-3">为什么要它呢？因为 Claude Code 的底层有一部分是需要这个"引擎"来驱动的。如果你电脑里没装这个引擎，Claude Code 就转不动。</p>' +

                '<div class="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">' +
                '<p class="font-medium text-gray-800 mb-2">🔍 怎么检查自己有没有装过？</p>' +
                '<p class="text-sm text-gray-700 mb-2">打开你刚刚找到的<strong>终端</strong>，在里面输入这行短命令（注意全部是英文字母，中间有个空格）：</p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-4 rounded-lg overflow-x-auto"><code>node -v</code></pre>' +
                '<p class="text-sm text-gray-700 mt-2">然后按下<strong>回车键</strong>。</p>' +
                '</div>' +

                '<div class="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">' +
                '<p class="text-sm text-green-800"><strong>✅ 如果屏幕上蹦出一串数字</strong>，比如 <code class="bg-green-100 px-1 rounded text-xs">v18.x.x</code> 或者 <code class="bg-green-100 px-1 rounded text-xs">v20.x.x</code>，说明你已经装好了！（我们需要 Node.js 18 或更新的版本）</p>' +
                '</div>' +

                '<div class="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">' +
                '<p class="text-sm text-red-800"><strong>❌ 如果电脑提示"找不到命令"（command not found）</strong>，说明你还没装。你需要去 Node.js 官网（<strong>nodejs.org</strong>）下载，并像安装普通软件一样一直点"下一步"直到安装好它。</p>' +
                '</div>' +

                '<div class="platform-mac hidden">' +
                '<div class="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">' +
                '<strong>⚠️ Mac用户注意：</strong>建议去 nodejs.org 官网直接下载安装包，<strong>不推荐用 Homebrew 安装</strong>，因为权限设置容易出问题，后续可能影响 Claude Code 运行。' +
                '</div></div>' +

                '<div class="mt-4 p-3 bg-red-50 border border-red-300 rounded-lg">' +
                '<p class="text-sm text-red-800"><strong>⚠️ 特别防坑提醒：</strong>网上的很多老教程会教你用 <code class="bg-red-100 px-1 rounded text-xs">npm</code>（Node.js 自带的一个软件管家）来安装 Claude Code，但<strong>这种 npm 安装方式已经被 Anthropic 官方正式弃用</strong>（不再推荐使用了）！我们在下一个模块会教你用官方最新、最稳定的原生安装方式。</p>' +
                '</div>' +
                '</div>'
        },
        {
            // 步骤5：准备就绪检查清单
            content: '<div class="step-title">④ 准备就绪检查清单</div>' +
                '<div class="step-content mb-4">' +
                '<p>在进入下一步正式安装前，请对照以下清单，确认你已经准备好了：</p>' +
                '</div>' +
                '<div id="checklist-module2"></div>'
        }
    ],
    // 检查清单数据
    checklistItems: [
        { id: 'account', text: '账号已搞定：要么已注册官方账号并完成付费设置（路线A），要么准备好了路线B的智谱账号。' },
        { id: 'terminal', text: '找到了"终端"：已经成功在电脑上打开了那个黑/蓝色的输入窗口（Windows 用户记得确认自己打开的是 PowerShell）。' },
        { id: 'node', text: '检查了"引擎"：在终端里输入 <code class="bg-gray-100 px-1 rounded text-xs">node -v</code> 能看到版本号，确认 Node.js 已经安装好。' }
    ],
    quiz: [
        {
            question: '关于我们在电脑上找的"终端"（Terminal / PowerShell），理解最准确的是？',
            options: [
                { text: '它是一个只能由专业黑客使用的危险软件，普通人打开会弄坏电脑。' },
                { text: '它只是我们用来和电脑"文字对话"的一个窗口，也是 Claude Code 以后工作的地方。' },
                { text: '它是用来下载电影的下载器。' }
            ],
            correct: 1,
            successMsg: '没错！终端只是换了一种方式——用打字来指挥电脑干活，完全不危险，也是 Claude Code 工作的地方。',
            explanation: '终端（Terminal / PowerShell）本质上是让用户通过文字命令与电脑交互的工具，并不是只有黑客才能用的危险软件。Claude Code 就是运行在终端里的 AI 助手。'
        },
        {
            question: '朋友发了一篇老旧的博客给你，说："打开终端，用 npm 这个命令去安装 Claude Code 就行了！" 你应该怎么回应？',
            options: [
                { text: '"好嘞，我马上照做，这是唯一的方法。"' },
                { text: '"这个方法虽然老，但官方最推荐。"' },
                { text: '"不行哦，官方已经弃用（不推荐）用 npm 来安装 Claude Code 了，我们应该用最新的原生安装方式！"' }
            ],
            correct: 2,
            successMsg: '没错！npm 安装方式已被 Anthropic 官方正式弃用，应该使用最新的原生安装方式。',
            explanation: 'Anthropic 官方已不再推荐通过 npm 安装 Claude Code。建议使用官方最新、最稳定的原生安装方式。不要盲目相信网上的老旧教程。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['2'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_2.steps, '', MODULE_2.id, {
        nextModuleId: '3',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_2.id, MODULE_2.quiz, function() {
                stepViewer.showNextModuleButton(nextBtnId);
            });
        }
    });

    // 重写 renderAllSteps：每次渲染后应用平台切换 + 初始化 Checklist
    var originalRenderAllSteps = stepViewer.renderAllSteps.bind(stepViewer);
    stepViewer.renderAllSteps = function() {
        originalRenderAllSteps();
        // 重新应用平台切换（后续步骤中的 platform-mac/platform-windows 元素需要）
        if (window.platformSwitcher) window.platformSwitcher.applyPlatform();
        // 如果检查清单容器出现，初始化 Checklist 组件
        var clContainer = document.getElementById('checklist-module2');
        if (clContainer && !clContainer.querySelector('.checklist-wrapper')) {
            new Checklist('checklist-module2', MODULE_2.checklistItems, {
                storageKey: 'claude_code_module2_checklist',
                title: '📋 准备就绪检查清单',
                readyText: '全部准备就绪！可以进入下一步了。'
            });
        }
    };
};
