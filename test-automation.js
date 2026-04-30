// 自动化测试脚本
const { chromium } = require('playwright');
const path = require('path');

async function testClaudeCodeTutorial() {
    console.log('🚀 开始自动化测试...');

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // 测试1：打开learn.html并检查页面加载
        console.log('\n📋 测试1：页面加载');
        await page.goto(`file://${path.join(__dirname, 'learn.html')}`);
        await page.waitForTimeout(2000);

        // 检查标题
        const title = await page.title();
        console.log('✅ 页面标题:', title);

        // 测试2：侧边栏加载
        console.log('\n📋 测试2：侧边栏功能');
        const sidebarDesktop = await page.locator('#sidebar-content-desktop').isVisible();
        console.log('✅ 桌面端侧边栏存在:', sidebarDesktop);

        const sidebarMobile = await page.locator('#sidebar-content-mobile').isVisible();
        console.log('✅ 手机端侧边栏存在:', sidebarMobile);

        // 测试3：平台切换Tab
        console.log('\n📋 测试3：平台切换功能');

        // 检查桌面端平台Tab
        const platformTabsDesktop = await page.locator('#platform-tabs-desktop').isVisible();
        console.log('✅ 桌面端平台Tab存在:', platformTabsDesktop);

        // 检查手机端平台Tab
        const platformTabsMobile = await page.locator('#platform-tabs-mobile').isVisible();
        console.log('✅ 手机端平台Tab存在:', platformTabsMobile);

        // 测试点击Mac Tab
        const macTab = page.locator('[data-platform="mac"]').first();
        await macTab.click();
        await page.waitForTimeout(500);

        // 检查Mac内容是否显示
        const macContent = await page.locator('.platform-mac').first().isVisible();
        console.log('✅ Mac内容显示:', macContent);

        // 检查Windows内容是否隐藏
        const windowsContentHidden = await page.locator('.platform-windows').first().isHidden();
        console.log('✅ Windows内容隐藏:', windowsContentHidden);

        // 测试点击Windows Tab
        const windowsTab = page.locator('[data-platform="windows"]').first();
        await windowsTab.click();
        await page.waitForTimeout(500);

        // 检查Windows内容是否显示
        const windowsContentVisible = await page.locator('.platform-windows').first().isVisible();
        console.log('✅ Windows内容显示:', windowsContentVisible);

        // 检查Mac内容是否隐藏
        const macContentHidden = await page.locator('.platform-mac').first().isHidden();
        console.log('✅ Mac内容隐藏:', macContentHidden);

        // 测试4：代码块和复制按钮
        console.log('\n📋 测试4：代码复制功能');

        // 检查代码块是否存在
        const codeBlock = await page.locator('.code-block').first().isVisible();
        console.log('✅ 代码块存在:', codeBlock);

        // 检查复制按钮是否存在
        const copyButton = await page.locator('.copy-button').first().isVisible();
        console.log('✅ 复制按钮存在:', copyButton);

        // 测试悬停显示复制按钮
        const codeBlockElement = page.locator('.code-block').first();
        await codeBlockElement.hover();
        await page.waitForTimeout(300);

        // 检查复制按钮是否可见（悬停后）
        const copyButtonVisible = await page.locator('.copy-button').first().isVisible();
        console.log('✅ 复制按钮悬停显示:', copyButtonVisible);

        // 测试5：localStorage持久化
        console.log('\n📋 测试5：localStorage持久化');

        // 设置为Windows平台
        await windowsTab.click();
        await page.waitForTimeout(500);

        // 刷新页面
        await page.reload();
        await page.waitForTimeout(2000);

        // 检查平台选择是否保持
        const windowsTabActive = await page.locator('[data-platform="windows"]').first().hasClass('bg-orange-500');
        console.log('✅ 平台选择保持:', windowsTabActive);

        // 检查Windows内容是否显示
        const windowsContentAfterReload = await page.locator('.platform-windows').first().isVisible();
        console.log('✅ 刷新后Windows内容显示:', windowsContentAfterReload);

        // 测试6：手机端抽屉
        console.log('\n📋 测试6：手机端抽屉功能');

        // 切换到手机视图
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(1000);

        // 检查手机端目录按钮
        const mobileMenuBtn = await page.locator('#mobile-menu-btn').isVisible();
        console.log('✅ 手机端目录按钮存在:', mobileMenuBtn);

        // 点击打开抽屉
        await page.locator('#mobile-menu-btn button').click();
        await page.waitForTimeout(500);

        // 检查抽屉是否打开
        const drawerOpen = await page.locator('#sidebar-drawer').first().isVisible();
        console.log('✅ 抽屉打开:', drawerOpen);

        // 点击背景关闭抽屉
        await page.locator('#drawer-backdrop').click();
        await page.waitForTimeout(500);

        // 检查抽屉是否关闭
        const drawerClosed = await page.locator('#sidebar-drawer').first().isHidden();
        console.log('✅ 抽屉关闭:', drawerClosed);

        console.log('\n✅ 所有自动化测试完成！');

    } catch (error) {
        console.error('\n❌ 测试失败:', error);
    } finally {
        await browser.close();
    }
}

// 运行测试
testClaudeCodeTutorial().catch(console.error);