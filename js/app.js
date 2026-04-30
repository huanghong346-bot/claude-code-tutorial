// 主逻辑，模块切换
class App {
    constructor() {
        this.modules = [
            { id: 'diagnosis', name: '诊断问卷', link: 'index.html', type: 'link' },
            { id: '1', name: '模块1：Claude Code是什么', type: 'module' },
            { id: '2', name: '模块2：安装前的准备', type: 'module' },
            { id: '3', name: '模块3：安装方法', type: 'module' },
            { id: '3b', name: '模块3B：配置智谱GLM', type: 'module', optional: true },
            { id: '3c', name: '模块3C：VS Code指南', type: 'module', optional: true },
            { id: '4', name: '模块4：安装后必学的基础操作', type: 'module' },
            { id: '5', name: '模块5：CLAUDE.md是什么以及怎么设置', type: 'module' },
            { id: '6', name: '模块6：省Token和长任务技巧', type: 'module' },
            { id: '7', name: '模块7：常用命令和快捷键速查', type: 'module' },
            { id: '8', name: '模块8：Skills技能包介绍与实战', type: 'module' },
            { id: 'feedback', name: '📝 给我们反馈', type: 'feedback' }
        ];

        this.currentModuleId = null;
        this.completedModules = [];
        this.skippedModules = [];

        this.localStorageKeyCompleted = 'claude_code_completed_modules';
        this.localStorageKeySkipped = 'claude_code_skipped_modules';

        this.init();
    }

    // 初始化
    init() {
        this.loadProgress();
        this.renderSidebar();
        this.initEventListeners();
        this.updateActiveModule();
    }

    // 加载进度
    loadProgress() {
        const completed = safeGetItem(this.localStorageKeyCompleted, '[]');
        const skipped = safeGetItem(this.localStorageKeySkipped, '[]');

        try {
            if (completed) {
                this.completedModules = JSON.parse(completed);
            }
        } catch (e) {
            console.warn('解析已完成模块数据失败，重置为空数组');
            this.completedModules = [];
        }

        try {
            if (skipped) {
                this.skippedModules = JSON.parse(skipped);
            }
        } catch (e) {
            console.warn('解析已跳过模块数据失败，重置为空数组');
            this.skippedModules = [];
        }
    }

    // 渲染侧边栏
    renderSidebar() {
        const desktopContent = document.getElementById('sidebar-content-desktop');
        const mobileContent = document.getElementById('sidebar-content-mobile');

        const html = this.generateSidebarHTML();

        if (desktopContent) {
            desktopContent.innerHTML = html;
        }

        if (mobileContent) {
            mobileContent.innerHTML = html;
        }

        this.bindModuleClickEvents();
    }

    // 生成侧边栏HTML
    generateSidebarHTML() {
        let html = '<ul class="space-y-1">';

        this.modules.forEach(module => {
            const isCompleted = this.completedModules.includes(module.id);
            const isSkipped = this.skippedModules.includes(module.id);
            const isActive = this.currentModuleId === module.id;
            const isFeedback = module.type === 'feedback';

            // 在反馈项前插入分隔线
            if (isFeedback) {
                html += '<li class="sidebar-separator"></li>';
            }

            html += `
                <li class="module-item ${isActive ? 'module-active' : ''}">
                    <a href="${module.link || `#${module.id}`}"
                       class="module-link flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                           isActive
                               ? 'bg-orange-500 text-white'
                               : isFeedback
                                   ? 'text-orange-600 hover:bg-orange-50'
                                   : 'text-gray-700 hover:bg-gray-100'
                       }"
                       data-module-id="${module.id}">
                        <div class="flex items-center gap-2">
                            ${isCompleted ? '<span class="text-green-500">✅</span>' : ''}
                            <span>${module.name}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            ${module.optional ? '<span class="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded">可选</span>' : ''}
                            ${isSkipped ? '<span class="text-xs px-1.5 py-0.5 bg-gray-200 text-gray-500 rounded">已跳过</span>' : ''}
                        </div>
                    </a>
                </li>
            `;
        });

        // 添加重置进度按钮
        html += `
            <li class="mt-4 pt-4 border-t border-gray-200">
                <button onclick="app.confirmResetProgress()"
                        class="w-full text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                    🔄 重置学习进度
                </button>
            </li>
        `;

        html += '</ul>';
        return html;
    }

    // 绑定模块点击事件
    bindModuleClickEvents() {
        // 移除旧的监听器，避免累积
        const links = document.querySelectorAll('.module-link');

        // 使用克隆替换节点来移除所有旧的事件监听器
        links.forEach(link => {
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
        });

        // 重新获取元素并添加监听器
        const newLinks = document.querySelectorAll('.module-link');
        newLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const moduleId = link.getAttribute('data-module-id');
                this.handleModuleClick(moduleId, e);
            });
        });
    }

    // 处理模块点击
    handleModuleClick(moduleId, event) {
        // 如果是外部链接（诊断问卷），不阻止默认行为
        const module = this.modules.find(m => m.id === moduleId);
        if (module && module.type === 'link') {
            return;
        }

        event.preventDefault();
        this.navigateToModule(moduleId);

        // 在手机端，关闭抽屉
        const drawer = document.getElementById('sidebar-drawer');
        if (drawer && !drawer.classList.contains('hidden')) {
            this.closeMobileDrawer();
        }
    }

    // 导航到指定模块
    navigateToModule(moduleId) {
        this.currentModuleId = moduleId;
        this.renderSidebar();
        this.loadModuleContent(moduleId);
        window.location.hash = moduleId;
    }

    // 加载模块内容
    loadModuleContent(moduleId) {
        const container = document.getElementById('main-content');
        if (!container) return;

        // 优先使用注册的模块加载器
        if (window.moduleLoaders && window.moduleLoaders[moduleId]) {
            container.innerHTML = '<div id="module-content-inner"></div>';
            window.moduleLoaders[moduleId]('module-content-inner');
            // 重新应用平台切换
            if (window.platformSwitcher) window.platformSwitcher.applyPlatform();
            // 重新添加复制按钮
            if (window.codeCopyButton) setTimeout(() => window.codeCopyButton.refresh(), 100);
            return;
        }

        // 无注册加载器时显示占位内容
        const module = this.modules.find(m => m.id === moduleId);
        if (module) {
            container.innerHTML = `
                <div class="text-center py-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">${module.name}</h2>
                    <p class="text-gray-500">模块内容加载中...</p>
                    <p class="text-sm text-gray-400 mt-2">（将在后续阶段实现）</p>
                </div>

                <!-- 平台切换测试区域 -->
                <div class="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 class="text-lg font-bold text-orange-800 mb-4">🧪 平台切换测试</h3>
                    <p class="text-gray-700 mb-4">点击上方的平台切换Tab，观察下方内容的变化：</p>

                    <div class="space-y-4">
                        <div class="platform-mac hidden p-4 bg-white rounded-lg border border-green-200">
                            <p class="text-green-800 font-medium">🍎 Mac专属内容</p>
                            <p class="text-gray-600">这是Mac平台专属的内容，只有在选择Mac Tab时才会显示。</p>
                        </div>

                        <div class="platform-windows hidden p-4 bg-white rounded-lg border border-blue-200">
                            <p class="text-blue-800 font-medium">🪟 Windows专属内容</p>
                            <p class="text-gray-600">这是Windows平台专属的内容，只有在选择Windows Tab时才会显示。</p>
                        </div>
                    </div>
                </div>

                <!-- 代码复制测试区域 -->
                <div class="mt-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 class="text-lg font-bold text-purple-800 mb-4">🧪 代码复制测试</h3>
                    <p class="text-gray-700 mb-4">悬停在下方代码块右上角，点击"复制"按钮测试复制功能：</p>

                    <pre class="code-block bg-[#1e1e1e] text-[#f0f0f0] font-mono text-sm p-4 rounded-lg overflow-x-auto relative group"><code>claude --version</code></pre>
                    <p class="text-gray-500 text-sm mt-2">↑ 将鼠标悬停在代码块上，右上角会出现复制按钮</p>
                </div>

                <!-- 测试命令区域 -->
                <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-sm">
                    <p class="text-blue-800 font-medium mb-2">🧪 测试命令：</p>
                    <p class="text-blue-700">在浏览器控制台输入以下命令测试功能：</p>
                    <ul class="text-left text-blue-700 mt-2 space-y-1">
                        <li><code class="bg-white px-1 rounded">app.testMarkCompleted('1')</code> - 标记模块1完成</li>
                        <li><code class="bg-white px-1 rounded">app.testMarkSkipped('3b')</code> - 标记模块3B跳过</li>
                        <li><code class="bg-white px-1 rounded">app.testUnmarkSkipped('3b')</code> - 移除模块3B跳过标记</li>
                        <li><code class="bg-white px-1 rounded">app.testResetAllProgress()</code> - 重置所有进度</li>
                        <li><code class="bg-white px-1 rounded">app.testGetStatus()</code> - 查看当前状态</li>
                        <li><code class="bg-white px-1 rounded">platformSwitcher.getCurrentPlatform()</code> - 查看当前平台</li>
                        <li><code class="bg-white px-1 rounded">platformSwitcher.setDefaultPlatform('windows')</code> - 设置默认平台</li>
                    </ul>
                </div>
            `;

            // 重新应用平台切换
            if (window.platformSwitcher) {
                window.platformSwitcher.applyPlatform();
            }

            // 重新添加复制按钮
            if (window.codeCopyButton) {
                setTimeout(() => {
                    window.codeCopyButton.refresh();
                }, 100);
            }
        }
    }

    // 更新当前激活模块
    updateActiveModule() {
        const hash = window.location.hash.substring(1); // 去掉 #
        if (hash && this.modules.find(m => m.id === hash)) {
            this.currentModuleId = hash;
        }
        this.renderSidebar();
    }

    // 标记模块为完成
    markModuleCompleted(moduleId) {
        if (!this.completedModules.includes(moduleId)) {
            this.completedModules.push(moduleId);
            safeSetItem(this.localStorageKeyCompleted, JSON.stringify(this.completedModules));
            this.renderSidebar();
        }
    }

    // 标记模块为跳过
    markModuleSkipped(moduleId) {
        if (!this.skippedModules.includes(moduleId)) {
            this.skippedModules.push(moduleId);
            safeSetItem(this.localStorageKeySkipped, JSON.stringify(this.skippedModules));
            this.renderSidebar();
        }
    }

    // 移除模块的跳过标记
    unmarkModuleSkipped(moduleId) {
        this.skippedModules = this.skippedModules.filter(id => id !== moduleId);
        safeSetItem(this.localStorageKeySkipped, JSON.stringify(this.skippedModules));
        this.renderSidebar();
    }

    // 关闭手机端抽屉
    closeMobileDrawer() {
        const drawer = document.getElementById('sidebar-drawer');
        if (drawer) {
            drawer.classList.add('hidden');
        }
    }

    // 测试：标记模块为完成（用于测试）
    testMarkCompleted(moduleId) {
        this.markModuleCompleted(moduleId);
    }

    // 测试：标记模块为跳过（用于测试）
    testMarkSkipped(moduleId) {
        this.markModuleSkipped(moduleId);
    }

    // 测试：移除模块的跳过标记（用于测试）
    testUnmarkSkipped(moduleId) {
        this.unmarkModuleSkipped(moduleId);
    }

    // 测试：重置所有进度（用于测试）
    testResetAllProgress() {
        safeRemoveItem(this.localStorageKeyCompleted);
        safeRemoveItem(this.localStorageKeySkipped);
        this.completedModules = [];
        this.skippedModules = [];
        this.renderSidebar();
        console.log('🔄 所有进度已重置');
    }

    // 测试：获取当前状态（用于测试）
    testGetStatus() {
        return {
            currentModuleId: this.currentModuleId,
            completedModules: this.completedModules,
            skippedModules: this.skippedModules
        };
    }

    // 确认重置进度（用户友好的界面）
    confirmResetProgress() {
        // 创建确认对话框
        const confirmed = confirm('确定要重置所有学习进度吗？\n\n此操作将：\n• 清除所有模块的完成状态\n• 清除所有模块的阅读进度\n• 清除平台选择偏好\n• 清除问卷答案\n\n此操作不可撤销，确定要继续吗？');

        if (confirmed) {
            // 清除所有claude_code相关的localStorage
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('claude_code_')) {
                    keysToRemove.push(key);
                }
            }

            keysToRemove.forEach(key => {
                safeRemoveItem(key);
            });

            // 重置内部状态
            this.completedModules = [];
            this.skippedModules = [];
            this.currentModuleId = null;

            // 重新渲染侧边栏
            this.renderSidebar();

            // 如果平台切换器存在，重置为默认平台
            if (window.platformSwitcher) {
                window.platformSwitcher.currentPlatform = 'mac';
                window.platformSwitcher.updateTabs();
                window.platformSwitcher.applyPlatform();
            }

            // 显示成功消息
            alert('✅ 学习进度已重置\n\n现在可以从头开始学习教程了！');

            console.log('🔄 所有学习进度已重置');
        }
    }

    // 初始化事件监听
    initEventListeners() {
        // 监听URL hash变化
        window.addEventListener('hashchange', () => {
            this.updateActiveModule();
        });

        // 监听手机端抽屉背景点击（使用事件委托，在document上监听）
        document.addEventListener('click', (e) => {
            const drawerBackdrop = document.getElementById('drawer-backdrop');
            if (drawerBackdrop && e.target === drawerBackdrop) {
                this.closeMobileDrawer();
            }
        });
    }
}

// 导出供其他文件使用
window.App = App;