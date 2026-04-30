// Mac/Windows平台切换
class PlatformSwitcher {
    constructor() {
        this.currentPlatform = null;
        this.localStorageKey = 'claude_code_selected_platform';
        this.platformTabs = null;
        this.platformTabsMobile = null;

        this.init();
    }

    // 初始化
    init() {
        this.loadPlatformPreference();
        this.createPlatformTabs();
        this.initEventListeners();
        this.applyPlatform();
    }

    // 加载平台偏好
    loadPlatformPreference() {
        const savedPlatform = safeGetItem(this.localStorageKey, 'mac');
        if (savedPlatform && (savedPlatform === 'mac' || savedPlatform === 'windows')) {
            this.currentPlatform = savedPlatform;
        } else {
            // 默认设置为Mac
            this.currentPlatform = 'mac';
        }
    }

    // 创建平台切换Tab
    createPlatformTabs() {
        // 桌面端Tab
        const desktopTabContainer = document.getElementById('platform-tabs-desktop');
        if (desktopTabContainer) {
            desktopTabContainer.innerHTML = this.generateTabsHTML('desktop');
            this.platformTabs = desktopTabContainer.querySelectorAll('.platform-tab');
        }

        // 手机端Tab
        const mobileTabContainer = document.getElementById('platform-tabs-mobile');
        if (mobileTabContainer) {
            mobileTabContainer.innerHTML = this.generateTabsHTML('mobile');
            this.platformTabsMobile = mobileTabContainer.querySelectorAll('.platform-tab');
        }
    }

    // 生成Tab HTML
    generateTabsHTML(type) {
        const baseClass = type === 'desktop'
            ? 'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200'
            : 'flex-1 px-3 py-2 rounded-lg font-medium text-sm text-center transition-all duration-200';

        return `
            <div class="flex ${type === 'desktop' ? 'space-x-2' : 'w-full'}">
                <button class="platform-tab ${baseClass} ${this.currentPlatform === 'mac' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
                        data-platform="mac">
                    🍎 Mac
                </button>
                <button class="platform-tab ${baseClass} ${this.currentPlatform === 'windows' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
                        data-platform="windows">
                    🪟 Windows
                </button>
            </div>
        `;
    }

    // 初始化事件监听
    initEventListeners() {
        // 不在这里添加监听器，改为事件委托
        // 在 document 上监听点击事件，避免监听器累积
        document.addEventListener('click', (e) => {
            const tab = e.target.closest('.platform-tab');
            if (tab) {
                const platform = tab.getAttribute('data-platform');
                if (platform && (platform === 'mac' || platform === 'windows')) {
                    this.switchPlatform(platform);
                }
            }
        });
    }

    // 切换平台
    switchPlatform(platform) {
        if (this.currentPlatform === platform) return;

        this.currentPlatform = platform;
        safeSetItem(this.localStorageKey, platform);

        // 更新Tab外观
        this.updateTabs();

        // 切换内容显示
        this.applyPlatform();
    }

    // 更新Tab外观
    updateTabs() {
        // 更新桌面端Tab
        if (this.platformTabs) {
            this.platformTabs.forEach(tab => {
                const tabPlatform = tab.getAttribute('data-platform');
                const isActive = tabPlatform === this.currentPlatform;
                tab.className = `platform-tab px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
            });
        }

        // 更新手机端Tab
        if (this.platformTabsMobile) {
            this.platformTabsMobile.forEach(tab => {
                const tabPlatform = tab.getAttribute('data-platform');
                const isActive = tabPlatform === this.currentPlatform;
                tab.className = `platform-tab flex-1 px-3 py-2 rounded-lg font-medium text-sm text-center transition-all duration-200 ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
            });
        }
    }

    // 应用平台切换到内容
    applyPlatform() {
        // 隐藏所有平台特定内容
        const macBlocks = document.querySelectorAll('.platform-mac');
        const windowsBlocks = document.querySelectorAll('.platform-windows');

        macBlocks.forEach(block => {
            block.classList.add('hidden');
            block.classList.remove('block');
        });

        windowsBlocks.forEach(block => {
            block.classList.add('hidden');
            block.classList.remove('block');
        });

        // 显示当前平台的内容
        if (this.currentPlatform === 'mac') {
            macBlocks.forEach(block => {
                block.classList.remove('hidden');
                block.classList.add('block');
            });
        } else if (this.currentPlatform === 'windows') {
            windowsBlocks.forEach(block => {
                block.classList.remove('hidden');
                block.classList.add('block');
            });
        }
    }

    // 设置默认平台（用于问卷结果设置）
    setDefaultPlatform(platform) {
        if (platform && (platform === 'mac' || platform === 'windows')) {
            this.currentPlatform = platform;
            safeSetItem(this.localStorageKey, platform);
            this.updateTabs();
            this.applyPlatform();
        }
    }

    // 获取当前平台
    getCurrentPlatform() {
        return this.currentPlatform;
    }
}

// 导出供其他文件使用
window.PlatformSwitcher = PlatformSwitcher;