# Playwright MCP 安装和使用指南

## 安装状态 ✅

- ✅ `@playwright/mcp` 已安装
- ✅ `@playwright/test` 已安装
- ✅ 系统连接测试成功
- ✅ MCP 配置文件已创建

## 配置说明

MCP 配置文件 `.clauderc` 已创建，配置为使用系统安装的 Chrome 浏览器：

```json
{
  "mcpServers": {
    "playwright": {
      "command": "node",
      "args": [
        "node_modules/@playwright/mcp/dist/index.js"
      ],
      "env": {
        "PLAYWRIGHT_BROWSERS_PATH": "0",
        "PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD": "1"
      }
    }
  }
}
```

## 使用方法

### 1. 启动开发服务器
```bash
cd "d:\VSCodeWorkspace\学习Claude code"
npm run dev
```

### 2. 在 Claude Code 中使用 Playwright MCP

安装完成后，Claude Code 将能够：

- 🌐 **自动化浏览器操作**：点击、输入、导航
- 📸 **截图**：自动捕获页面状态
- 🔍 **元素检查**：查看 DOM 结构和样式
- 🧪 **功能测试**：验证页面功能
- 🐛 **调试**：实时检查页面问题

### 3. 示例命令

你可以要求 Claude Code 执行以下操作：

```
# 打开页面
打开 learn.html 页面

# 检查元素
检查侧边栏是否正常显示

# 截图
截取当前页面状态

# 测试交互
测试平台切换功能是否正常

# 调试问题
查看为什么某个按钮不工作
```

## 当前配置

- **浏览器类型**：系统 Chrome 浏览器
- **运行模式**：有界面模式（可以看到浏览器窗口）
- **工作目录**：`d:\VSCodeWorkspace\学习Claude code`

## 故障排除

### 如果 MCP 无法启动：

1. **检查 Chrome 是否安装**
   ```bash
   # Windows
   where chrome
   ```

2. **检查 Node.js 版本**
   ```bash
   node --version
   ```

3. **重新安装依赖**
   ```bash
   cd "d:\VSCodeWorkspace\学习Claude code"
   rm -rf node_modules package-lock.json
   npm install
   ```

## 测试命令

运行测试脚本验证安装：
```bash
cd "d:\VSCodeWorkspace\学习Claude code"
node playwright-test.js
```

这将启动 Chrome 并加载 `learn.html` 页面。

## 下一步

现在你可以：
1. 继续开发网页功能
2. 要求 Claude Code 使用 Playwright MCP 测试页面
3. 自动化浏览器操作来验证功能
4. 截图和调试页面问题

---

**注意**：Playwright MCP 已经配置完成，Claude Code 现在可以直接控制 Chrome 浏览器进行开发和调试！