# CLAUDE.md — Claude Code 入门教程网站

## 项目概述

面向中文小白用户的 Claude Code 入门教程网站。从零开始，手把手教完全没有编程基础的用户安装和使用 Claude Code。

**入口文件：**
- [index.html](index.html) — 首页，5 道诊断问卷，匹配学习路径
- [learn.html](learn.html) — 主教程页面，hash 路由驱动模块切换

## 项目结构

```
学习Claude code/
├── index.html              # 首页诊断问卷
├── learn.html              # 主教程页面（hash 路由：/#/module-1, /#/module-2, ...）
├── css/
│   └── style.css           # 全局样式 + 组件样式（代码块、评分弹窗、表格、技能卡片等）
├── js/
│   ├── app.js              # 主应用（模块注册、hash 路由、导航）
│   ├── steps.js            # StepViewer 组件（步骤渲染、进度条、下一步按钮）
│   ├── platform.js         # PlatformSwitcher 组件（Mac / Windows 切换）
│   ├── quiz.js             # DiagnosisQuiz 首页诊断问卷
│   ├── lesson-quiz.js      # LessonQuiz 课内测验组件
│   ├── checklist.js        # Checklist 检查清单组件
│   ├── copy.js             # CopyManager 代码复制按钮
│   ├── rating-modal.js     # RatingModal 评分打赏弹窗（3 步：打分 → 感谢/打赏 → 二维码）
│   ├── progress.js         # 学习进度管理
│   └── storage-utils.js    # localStorage 安全封装（不可用时降级为内存存储）
├── content/                # 各模块内容定义
│   ├── module-1.js         # 模块 1：Claude Code 是什么
│   ├── module-2.js         # 模块 2：安装前的准备
│   ├── module-3.js         # 模块 3：安装方法（含平台切换、报错手风琴）
│   ├── module-3b.js        # 模块 3B：配置智谱 GLM（可选）
│   ├── module-3c.js        # 模块 3C：VS Code 图形界面指南（可选）
│   ├── module-4.js         # 模块 4：基础操作
│   ├── module-5.js         # 模块 5：CLAUDE.md 设置
│   ├── module-6.js         # 模块 6：省钱省额度
│   ├── module-7.js         # 模块 7：命令速查 & 快捷键
│   ├── module-8.js         # 模块 8：Skills 技能包
│   └── module-feedback.js  # 反馈页面（侧边栏独立入口）
├── images/                 # 图片资源
│   ├── claude-code-icon.png
│   ├── wechat-pay.png      # 微信收款码
│   └── alipay.png          # 支付宝收款码
└── screenshots/            # 测试截图
```

## 架构关键点

### 模块加载机制

模块通过 `window.moduleLoaders` 注册表加载：

```js
window.moduleLoaders[moduleId] = function(containerId) { ... }
```

`app.loadModuleContent()` 查找注册表调用对应函数。每个模块 loader 创建 `StepViewer` 实例，并在最后一步之后渲染 `LessonQuiz`。

### StepViewer + LessonQuiz 组合模式

```
StepViewer(steps) → 最后一步 → 显示 quiz 区域 → LessonQuiz → 完成后回调
                                                                    ↓
                                              RatingModal.checkAndShow()（模块 3 & 7）
                                                                    ↓
                                              showNextModuleButton() → "进入下一模块 →"
```

### 模块 3 特殊逻辑

最后一个 step 的 content 中包含 3 个 `nav-card`（内联 onclick）：
- 模块 3B（配置智谱 GLM）
- 模块 3C（VS Code 图形界面）
- 跳过直接进入模块 4

### 评分弹窗触发

- 模块 3 quiz 完成后 → `cc_tutorial_rating_1` 键
- 模块 7 quiz 完成后 → `cc_tutorial_rating_2` 键
- 每个键只弹一次（localStorage 持久化）

### Hash 路由

`/#/module-1` 到 `/#/module-8`，加上 `/#/module-3b`、`/#/module-3c`、`/#/feedback`。

### 关键全局变量

- `window.app` — `learn.html` 中显式赋值：`let app = new App(); window.app = app;`（`let` 在 script 顶层不会自动挂 window）
- `window.moduleLoaders` — 模块加载函数注册表

## 技术栈

- 纯原生 JavaScript（无框架）
- Tailwind CSS CDN + 自定义 CSS
- localStorage 持久化
- Playwright E2E 测试（104 个测试用例）

## 部署

目标：GitHub Pages（https://github.com/rickrocks346/claude-code-tutorial）

需要替换的占位内容：
- `images/wechat-pay.png` 和 `images/alipay.png` — 收款码图片（已更新）
- 广告位占位符（`ad-slot-sidebar`、`ad-slot-banner`）

## 注意事项

- 所有文案面向零编程基础用户，避免技术术语
- 代码块使用 `.code-container` + `.code-copy-btn` 组合
- 移动端（375px）侧边栏通过 `#sidebar-drawer` + `#drawer-backdrop` 实现抽屉
- 平台相关内容通过 `.platform-mac` / `.platform-windows` class 切换显示
- 表格在移动端必须支持横向滚动（`.ref-table-wrapper` 容器）
