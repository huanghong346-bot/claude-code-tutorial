const { chromium } = require('@playwright/test');

(async () => {
  try {
    console.log('正在连接到系统 Chrome 浏览器...');

    // 使用系统安装的 Chrome
    const browser = await chromium.launch({
      headless: false,
      channel: 'chrome' // 使用系统安装的 Chrome
    });

    console.log('Chrome 启动成功！');

    const page = await browser.newPage();
    await page.goto('file:///d:/VSCodeWorkspace/学习Claude code/learn.html');

    console.log('页面加载成功！');

    // 等待用户查看
    console.log('按 Ctrl+C 关闭浏览器...');

    // 保持浏览器打开
    await new Promise(() => {});

  } catch (error) {
    console.error('错误:', error.message);
    console.log('提示：请确保已安装 Chrome 浏览器');
  }
})();