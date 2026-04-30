// 模块8：Skills技能包介绍与实战
var MODULE_8 = {
    id: '8',
    title: 'Skills技能包',
    steps: [
        {
            content: '<div class="step-title">💡 什么是 Skills（技能包）？</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">当你用到这个阶段，Claude Code 已经是个非常能干的"全栈程序员"了。但如果你想让它在某些<strong>特定领域</strong>变成"顶尖专家"，就需要用到 Skills（技能包）。</p>' +

                '<div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 mb-3">' +
                '<p class="font-bold text-blue-800 mb-1">📱 打个直觉易懂的比方：</p>' +
                '<p class="text-sm text-blue-700">你可以把 Claude Code 本身想象成一部出厂设置的智能手机，虽然自带的功能已经很好用，但 Skills 就像是手机 App Store 里的各种<strong>"应用插件"</strong>。没有下载修图 App 之前，你的手机也能拍照；但装了修图 App 之后，它突然就多了一个专门处理照片的强大本领。</p>' +
                '<p class="text-sm text-blue-700 mt-2">比如，你给它装上<strong>"PDF 技能包"</strong>，它就瞬间变成了处理 PDF 文件的专家；装上<strong>"调试助手技能包"</strong>，它遇到 Bug 时的处理方式就会变得像老专家一样系统、严谨。</p>' +
                '</div>' +

                '<div class="p-4 bg-green-50 rounded-lg border-2 border-green-300">' +
                '<p class="font-bold text-green-800 mb-1">💡 Skills 和 CLAUDE.md 的区别（一句话说清楚）：</p>' +
                '<p class="text-sm text-green-700">CLAUDE.md 是你给它写的<strong>项目说明书</strong>（每次新对话它都会从头到尾自动读一遍），而 Skills 是<strong>按需加载</strong>的专业技能（它平时放在口袋里不占脑容量，只有你需要它用这项技能时，它才会激活）。两者完全可以配合使用！</p>' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🚨 重要前提 + 🛠 怎么安装 Skill</div>' +
                '<div class="step-content">' +

                '<div class="p-4 bg-red-50 rounded-lg border-2 border-red-300 mb-4">' +
                '<p class="font-bold text-red-800 mb-2">🚨 重要前提说明</p>' +
                '<div class="text-sm text-red-700 space-y-1">' +
                '<p>官方的 Skills 自动激活功能，目前需要拥有 <strong>Claude Pro、Max、Team 或 Enterprise</strong> 的官方付费订阅才能使用，免费的基础账号暂时不支持。</p>' +
                '<p><strong>使用智谱 GLM 的国内用户注意：</strong>你配置的 GLM "大脑"暂不支持官方的 Skills 自动无缝激活，但千万别灰心！本模块结尾为你准备了专属的<strong>"平替指南"</strong>，这些强大的功能你绝大部分依然可以完美使用。</p>' +
                '</div></div>' +

                '<p class="font-bold text-gray-800 mb-2">🛠 怎么安装一个 Skill（技能包）？</p>' +
                '<p class="text-sm text-gray-700 mb-3">安装技能包非常简单，主要有两种方式：</p>' +

                '<div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 mb-3">' +
                '<p class="font-bold text-blue-800 mb-2">方式一（🌟 强烈推荐）：通过 plugin 命令安装</p>' +
                '<div class="text-sm text-gray-700 space-y-2">' +
                '<p>在 Claude Code 的输入框里，直接使用自带的插件安装命令。但请注意，如果是第一次安装官方技能包，你需要先添加官方的<strong>"应用商店（marketplace）"</strong>。</p>' +
                '<p><strong>第一步（只需做一次，添加官方仓库）：</strong></p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg overflow-x-auto"><code>/plugin marketplace add anthropics/skills</code></pre>' +
                '<p><strong>第二步（安装具体技能包）：</strong></p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg overflow-x-auto"><code>/plugin install pdf</code></pre>' +
                '</div></div>' +

                '<div class="p-4 bg-gray-50 rounded-lg border-2 border-gray-300 mb-3">' +
                '<p class="font-bold text-gray-800 mb-2">方式二：手动下载到技能文件夹</p>' +
                '<div class="text-sm text-gray-700 space-y-1">' +
                '<p>如果你在网上看到别人分享的一个很棒的技能包，你可以把它下载到电脑里的 <code class="bg-gray-100 px-1 rounded text-xs">~/.claude/skills/</code> 文件夹中。通常我们会使用 <code class="bg-gray-100 px-1 rounded text-xs">git clone</code> 命令。</p>' +
                '<p class="text-gray-500">💡 git 是一个程序员最常用的工具，你可以把它简单理解成一个专门用来"从网上下载和管理代码"的下载器。</p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg overflow-x-auto"><code>git clone 技能包的网址 ~/.claude/skills/技能包名字</code></pre>' +
                '</div></div>' +

                '<div class="p-3 bg-green-50 rounded-lg border border-green-200 text-sm text-green-700">' +
                '<strong>安装后怎么管理？</strong>安装完成后，Claude 会在需要时自动检测并使用这些技能。你也可以在对话框输入 <code class="bg-green-100 px-1 rounded text-xs">/plugins</code>，调出图形化界面来管理（开启、关闭或卸载）你已经安装的技能包。' +
                '</div>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🏆 社区最受欢迎技能包 — 第一层：基础实用层</div>' +
                '<div class="step-content">' +
                '<p class="mb-3">我们为你挑选了目前最强大、最好用的 6 个技能包，分为三个层级，建议你从基础层开始慢慢体验。</p>' +

                '<div class="skill-tier-header skill-tier-basic">📗 第一层：基础实用层（官方出品，小白首选）</div>' +
                '<p class="text-sm text-gray-600 mb-3">这些是 Anthropic 官方制作的基础技能，简单好用，装上就能立刻见效。</p>' +

                // Card 1: docx
                '<details class="skill-card">' +
                '<summary><span class="skill-icon">📄</span><span class="skill-info"><span class="skill-name">1. docx（Word 文档处理）</span><div class="skill-tagline">创建、读取和编辑 Word 文档，支持格式、表格和批注</div></span><span class="skill-expand-hint">点击展开 ▼</span></summary>' +
                '<div class="skill-detail">' +
                '<div class="skill-section"><span class="skill-label skill-label-what">能干什么</span>赋予 Claude 直接创建、读取和编辑 Word（.docx）文档的能力，不仅能写字，还能处理各种字体格式、插入表格、甚至添加批注。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-who">适合谁</span>需要经常用 AI 帮你输出正式的总结报告、合同草案、长篇文案的朋友。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-how">使用示例</span><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-1 overflow-x-auto"><code>帮我根据我们刚才讨论的内容，生成一份正式的Word文档总结报告，要有标题、章节分隔和一个对比表格。</code></pre></div>' +
                '</div></details>' +

                // Card 2: pdf
                '<details class="skill-card">' +
                '<summary><span class="skill-icon">📑</span><span class="skill-info"><span class="skill-name">2. pdf（PDF 处理专家）</span><div class="skill-tagline">精准提取 PDF 文字表格，合并拆分页面，自动填写表单</div></span><span class="skill-expand-hint">点击展开 ▼</span></summary>' +
                '<div class="skill-detail">' +
                '<div class="skill-section"><span class="skill-label skill-label-what">能干什么</span>能够极其精准地提取 PDF 里的文字和表格内容，还能帮你合并多个 PDF 文件、拆分页面，甚至自动帮你填写 PDF 表单。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-who">适合谁</span>经常需要阅读大量 PDF 论文、财报，或者需要批量处理 PDF 文件的用户。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-how">使用示例</span><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-1 overflow-x-auto"><code>请读取@合同.pdf这个文件，把里面所有涉及付款时间和违约条款的段落提取出来，用中文列一个清单给我。</code></pre></div>' +
                '</div></details>' +

                // Card 3: systematic-debugging
                '<details class="skill-card">' +
                '<summary><span class="skill-icon">🐛</span><span class="skill-info"><span class="skill-name">3. systematic-debugging（系统化调试助手）</span><div class="skill-tagline">强制使用严谨"破案"流程，杜绝瞎猜乱改</div></span><span class="skill-expand-hint">点击展开 ▼</span></summary>' +
                '<div class="skill-detail">' +
                '<div class="skill-section"><span class="skill-label skill-label-what">能干什么</span>这是<strong>最推荐新手安装</strong>的技能之一！当程序报错时，新手或 AI 经常会"瞎猜乱改"，把代码越改越乱。有了这个技能，Claude 会被强制使用一种严谨的"破案"流程：<strong>先收集证据 → 提出假设 → 验证假设 → 最后才动手修改代码</strong>。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-who">适合谁</span>所有用户，特别是每次遇到复杂 Bug 就手忙脚乱、不知从何下手的朋友。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-how">使用示例</span><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-1 overflow-x-auto"><code>我的网页点击提交按钮后没有任何反应，也没有报错信息，请用系统化的排查流程帮我找出问题。</code></pre></div>' +
                '</div></details>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🏆 第二层：进阶效率层</div>' +
                '<div class="step-content">' +

                '<div class="skill-tier-header skill-tier-advanced">📙 第二层：进阶效率层（让 Claude 工作更稳定专业）</div>' +

                // Card 4: ECC
                '<details class="skill-card">' +
                '<summary><span class="skill-icon">🌟</span><span class="skill-info"><span class="skill-name">4. Everything Claude Code（简称 ECC）🌟🌟🌟</span><div class="skill-tagline">超级豪华应用套餐，让 Claude 从实习生变成正规军</div></span><span class="skill-expand-hint">点击展开 ▼</span></summary>' +
                '<div class="skill-detail">' +
                '<div class="skill-section"><span class="skill-label skill-label-what">这是什么（打个比方）</span>如果上面介绍的技能包是单个的 App，那 ECC 就是一整个<strong>"超级豪华应用套餐"</strong>！安装这一个，相当于同时给你装了几十个经过全世界开发者大量测试、最专业的干活工具。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-what">它的分量有多重</span>它是目前整个社区最受认可、最火爆的 Claude Code 增强工具，已经在 GitHub 上获得了<strong>超过 10 万颗星</strong>，而且是诞生于 Anthropic 官方黑客松的<strong>冠军项目</strong>！</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-what">它具体包含什么（挑几个最牛的）</span>' +
                '<ul class="list-disc list-inside space-y-1 mt-1"><li><strong>专业子代理（Agents）：</strong>比如 planner 专门负责帮你做周密的计划，code-reviewer 专门像资深主管一样审查你的代码质量，找漏洞。</li>' +
                '<li><strong>技能包（Skills）：</strong>比如 coding-standards 强制规范代码格式，testing 制定专业的测试工作流。</li>' +
                '<li><strong>自动化钩子（Hooks）：</strong>比如在会话结束时，自动帮你把重要上下文写成笔记保存下来；在提交代码前，自动检查有没有不小心泄露了密码。</li></ul></div>' +
                '<div class="skill-section"><span class="skill-label skill-label-who">适合谁</span>想要把 Claude Code 从一个"聪明的实习生"变成"稳定、专业、严谨的工程团队"，希望它少犯低级错误的用户。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-how">怎么安装</span>' +
                '<p class="mt-1"><strong>第一步（添加仓库）：</strong></p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-2 rounded-lg overflow-x-auto"><code>/plugin marketplace add everything-claude-code@everything-claude-code</code></pre>' +
                '<p class="mt-1"><strong>第二步（执行安装）：</strong></p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-2 rounded-lg overflow-x-auto"><code>/plugin install everything-claude-code@everything-claude-code</code></pre>' +
                '</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-note">⚠️ 注意提醒</span>ECC 的功能极其庞大，它会让 Claude 在干活前考虑非常多的规矩，从而增加"大脑"的上下文负担。强烈建议你先把前面几个基础 Skills 用熟了之后再安装它，并且不要一开始就把它里面的几十个功能全打开。</div>' +
                '</div></details>' +

                // Card 5: TDD
                '<details class="skill-card">' +
                '<summary><span class="skill-icon">🧪</span><span class="skill-info"><span class="skill-name">5. test-driven-development（测试驱动开发 / TDD）</span><div class="skill-tagline">先写测试再写代码，大厂级编程习惯，Bug 极少</div></span><span class="skill-expand-hint">点击展开 ▼</span></summary>' +
                '<div class="skill-detail">' +
                '<div class="skill-section"><span class="skill-label skill-label-what">能干什么</span>强制 Claude 采用一种在专业大厂里非常流行的编程习惯——TDD（先写测试，再写代码）。它会先写一段用来验证功能的"检查程序"，确认检查程序报错后，再去写真正的代码，直到检查通过。这样写出来的代码<strong>质量极高，Bug 极少</strong>。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-who">适合谁</span>想要养成顶级编程习惯、做大项目、希望减少后期因为 Bug 导致疯狂返工的用户。</div>' +
                '<div class="skill-section"><span class="skill-label skill-label-how">使用示例</span><pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-3 rounded-lg mt-1 overflow-x-auto"><code>我需要做一个计算购物车总价的功能，请先帮我写测试用例，等测试确认会失败后，再写实现代码。</code></pre></div>' +
                '</div></details>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🏆 第三层：高阶玩法层 — Playwright MCP</div>' +
                '<div class="step-content">' +

                '<div class="skill-tier-header skill-tier-pro">📕 第三层：高阶玩法层（让 Claude 控制你的浏览器）</div>' +

                '<details class="skill-card" open>' +
                '<summary><span class="skill-icon">🚀</span><span class="skill-info"><span class="skill-name">6. Playwright MCP（让 Claude 直接操控浏览器）</span><div class="skill-tagline">AI 自己打开浏览器、点击、测试、改代码，全自动闭环！</div></span><span class="skill-expand-hint">点击收起 ▲</span></summary>' +
                '<div class="skill-detail">' +

                '<div class="skill-section"><span class="skill-label skill-label-what">价值场景（为什么要用它）</span>' +
                '<p class="mt-1">以前你让 Claude 写了一个网页，你需要：自己打开浏览器 → 手动点按钮测试 → 发现报错了 → 截图或复制报错信息 → 贴回给 Claude → 等它改完代码 → 你再刷新浏览器验证。</p>' +
                '<p class="mt-2">有了这个工具，<strong>闭环了！</strong>Claude 可以自己打开浏览器、自己点击按钮、自己看浏览器的控制台报错、自己回去改代码、自己再刷新验证。<strong>整个测试过程你完全不用参与！</strong></p></div>' +

                '<div class="skill-section"><span class="skill-label skill-label-what">这是什么</span>这是由 Playwright 官方出品的 MCP 服务器。MCP 可以理解为让 Claude 连接外部软件工具的一座<strong>"桥梁"</strong>。它通过浏览器自动化协议，让 Claude 获得了直接控制 Chrome 浏览器的超能力。</div>' +

                '<div class="skill-section"><span class="skill-label skill-label-what">它能干什么</span>自动导航到某个网页、点击页面上的按钮、填写输入框表单、读取网页控制台的报错信息、监控网络请求、全屏截图、甚至测量网页的加载性能。</div>' +

                '<div class="skill-section"><span class="skill-label skill-label-how">💡 实战安装经验 — 方式一（推荐）</span>' +
                '<p class="mt-1">直接对 Claude Code 说：</p>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg mt-1 overflow-x-auto"><code>"请帮我在当前项目目录安装 Playwright MCP，让我能直接控制 Chrome 浏览器进行网页调试"</code></pre>' +
                '<p class="text-sm text-gray-600 mt-1">Claude Code 会自动完成：检查 package.json → 安装依赖 → 创建 MCP 配置文件 → 配置系统 Chrome → 连接测试验证。</p>' +
                '</div>' +

                '<div class="skill-section"><span class="skill-label skill-label-how">方式二：手动命令安装（备选）</span>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg mt-1 overflow-x-auto"><code># 1. 创建 package.json（如果没有）' +
                '\necho \'{"name":"my-project","version":"1.0.0"}\' > package.json' +
                '\n' +
                '\n# 2. 安装 Playwright MCP' +
                '\nnpm install @playwright/mcp @playwright/test' +
                '\n' +
                '\n# 3. Claude Code 会自动检测并配置</code></pre>' +
                '</div>' +

                '<div class="skill-section"><span class="skill-label skill-label-how">验证方式</span>安装完成后，重启 Claude Code，然后对它说：<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-2 rounded-lg mt-1 overflow-x-auto"><code>"请打开浏览器访问我的项目页面，帮我测试功能"</code></pre></div>' +

                '<div class="skill-section"><span class="skill-label skill-label-how">更多使用示例</span>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg mt-1 overflow-x-auto"><code>请打开浏览器访问 learn.html，点击侧边栏的"模块1"，检查页面是否正常加载，然后截图给我看看效果。</code></pre>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg mt-1 overflow-x-auto"><code>我的网页点击提交按钮后没有反应，请打开浏览器帮我调试一下，看看控制台有没有报错信息。</code></pre>' +
                '<pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-xs p-3 rounded-lg mt-1 overflow-x-auto"><code>请测试一下平台切换功能，在 Mac 和 Windows 之间切换，确认对应的内容是否正确显示。</code></pre>' +
                '</div>' +

                '<div class="skill-section"><span class="skill-label skill-label-note">⚠️ 限制说明</span>这个高级功能要求你的电脑本地安装了 Google Chrome 或 Microsoft Edge 浏览器；但不需要下载额外的浏览器，会直接使用你系统里已有的。</div>' +

                '<div class="skill-section"><span class="skill-label skill-label-what">💡 小贴士：Playwright MCP 相比其他方案的优点</span>' +
                '<ul class="list-disc list-inside space-y-0.5 mt-1"><li>不需要下载额外浏览器，使用系统 Chrome 即可</li><li>安装过程简单，Claude Code 可以全自动完成</li><li>支持有界面模式，调试时可以看到浏览器窗口</li><li>官方维护，稳定性和兼容性都很好</li></ul></div>' +

                '</div></details>' +
                '</div>'
        },
        {
            content: '<div class="step-title">🇨🇳 智谱 GLM 用户专属提示</div>' +
                '<div class="step-content">' +

                '<div class="glm-notice">' +
                '<p class="glm-notice-title">🇨🇳 选了路线 B（使用智谱 GLM 大模型）的朋友们</p>' +
                '<p class="text-sm text-gray-700 mb-3">不要因为上面提到"官方 Skills 自动激活不支持免费账号"就觉得亏了！我们来盘点一下你的可用情况：</p>' +

                '<div class="space-y-2 text-sm text-gray-700">' +
                '<div class="p-2 bg-white rounded border border-orange-200">' +
                '<p><strong>Skills 自动激活暂不支持：</strong>但这完全不影响大局！你依然可以手动去 Github 把别人写好的 Skills 文件夹下载到你的项目里，然后在你的 CLAUDE.md 文件里加一句话（比如：<code class="bg-gray-100 px-1 rounded text-xs">请参考 ./skills/pdf/SKILL.md 里的规则</code>），就能达到几乎一模一样的效果！</p>' +
                '</div>' +

                '<div class="p-2 bg-white rounded border border-orange-200">' +
                '<p><strong>ECC 超级套餐：</strong>你可以正常安装和使用，它里面的核心思维模式和钩子绝大部分都能在 GLM 模型下正常运转！</p>' +
                '</div>' +

                '<div class="p-2 bg-white rounded border border-orange-200">' +
                '<p><strong>Playwright MCP（浏览器控制）：完全可以使用！</strong>强烈推荐 GLM 用户尝试本模块的第 6 个技能，这是最能让你感受到"AI 全自动接管"震撼效果的功能！</p>' +
                '</div>' +

                '<div class="p-2 bg-white rounded border border-orange-200">' +
                '<p><strong>官方的 "Claude in Chrome" 扩展插件：</strong>这个确实需要官方账号授权，GLM 暂不支持，但有了上面的 MCP，我们一样能控制浏览器。</p>' +
                '</div>' +
                '</div>' +

                '<p class="text-sm text-orange-700 font-bold mt-3 text-center">总结：缺的那一点点全自动的小便利，完全不影响核心体验，该有的重磅武器，咱们一样都不差！</p>' +
                '</div>' +
                '</div>'
        }
    ],
    quiz: [
        {
            question: '关于本模块中篇幅最长的"ECC (Everything Claude Code)"，下面哪个比喻最准确？',
            options: [
                { text: '它是一个用来清理电脑垃圾文件的清理大师。' },
                { text: '它像是一个极其豪华的"超级应用套餐"，装上它就相当于给 Claude 配备了专业的规划员、审查员、代码规范和自动化检查工具，让它变得像正规军一样严谨。' },
                { text: '它是一个只能在手机上运行的背单词软件。' }
            ],
            correct: 1,
            successMsg: '没错！ECC 是超级豪华应用套餐，让 Claude 从实习生变成正规军。',
            explanation: 'ECC（Everything Claude Code）是目前社区最受认可的综合增强工具包，包含专业子代理（planner、code-reviewer）、技能包（coding-standards、testing）和自动化钩子（Hooks），能全面提升 Claude 的工作质量和稳定性。'
        },
        {
            question: '为什么说"Playwright MCP"这个高级技能包非常令人兴奋？',
            options: [
                { text: '因为它能让 Claude Code 自动帮你连接真实的浏览器，代替你完成"点击、填表、查看网页报错并自动修复代码"的繁琐测试闭环，让你彻底解放双手。' },
                { text: '因为它能让你的 Chrome 浏览器自动拦截所有的网页广告。' },
                { text: '因为它能让 Claude Code 直接免费帮你充值游戏金币。' }
            ],
            correct: 0,
            successMsg: '没错！Playwright MCP 让 Claude 能自己操控浏览器完成测试闭环。',
            explanation: 'Playwright MCP 赋予 Claude 直接控制 Chrome 浏览器的能力，实现了"写代码 → 打开浏览器 → 自动测试 → 发现报错 → 自动修复 → 再次验证"的完整自动化闭环，你完全不用手动参与测试过程。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['8'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_8.steps, '', MODULE_8.id, {
        nextModuleId: null,
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_8.id, MODULE_8.quiz, function() {
                // Module 8 is the last module — show a completion message instead
                var nextBtnArea = document.getElementById(nextBtnId);
                if (nextBtnArea) {
                    nextBtnArea.style.display = 'block';
                    nextBtnArea.innerHTML =
                        '<div class="text-center p-6 bg-gradient-to-r from-orange-50 via-yellow-50 to-green-50 rounded-xl border-2 border-orange-300">' +
                        '<p class="text-2xl mb-2">🎉</p>' +
                        '<p class="text-lg font-bold text-orange-800 mb-2">恭喜你完成了全部教程！</p>' +
                        '<p class="text-sm text-gray-600">你已经掌握了从安装到进阶的全部知识，现在就去用 Claude Code 创造你的项目吧！</p>' +
                        '</div>';
                }
            });
        }
    });
};
