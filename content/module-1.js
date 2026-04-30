// 模块1：Claude Code 到底是个啥？
const MODULE_1 = {
    id: '1',
    title: 'Claude Code是什么',
    steps: [
        {
            content: `<div class="step-title">① 一句话说清楚 Claude Code 是什么？</div>
            <div class="step-content">
                Claude Code 是一个直接住在你电脑终端（就是电脑里那个黑乎乎、用来敲字母命令的窗口）里的"全自动 AI 电脑小助手"。只要你用大白话给它下达指令，它就能自动帮你阅读文件、写代码、甚至直接操作你电脑里的文件夹。
            </div>`
        },
        {
            content: `<div class="step-title">② 它和 ChatGPT、豆包这类聊天 AI 有什么本质区别？</div>
            <div class="step-content">
                最大的区别在于：聊天 AI 只能"动嘴"，而 Claude Code 能"动手"。当你问 ChatGPT"怎么做个网站"时，它会给你一长串代码，你需要自己懂得怎么新建文件、把代码复制粘贴进去、保存并打开。但 Claude Code 是一个"智能体"（Agent）。你只需要告诉它你的需求，它就会自己去你的电脑里新建文件、自己把代码写进去、自己保存。你只需要在旁边看着或者喝杯咖啡就行了。
            </div>`
        },
        {
            content: `<div class="step-title">③ 它能帮你做哪些具体的事？（真实例子）</div>
            <div class="step-content">
                不要以为只有专业程序员才能用它！对编程小白来说，这双"手脚"能干的活儿非常多：
                <br><br>
                <strong>真实场景一：</strong>降低门槛的"动嘴编程"（Vibe Coding），普通人也能做软件。过去去做软件需要学几年编程，现在这个门槛被彻底打破了。普通人可以通过 Vibe Coding（跟着感觉走，纯靠动嘴提需求）的方式来做网站和应用。你只需要告诉它："帮我写一个个人记账网页，颜色要温馨一点"，它就会自动帮你把网页搭出来。比如，你现在看到的这个入门教程网页，就是由一个完全没有编程基础的普通人编写出来的！
                <br><br>
                <strong>真实场景二：</strong>帮你整理电脑文件等日常杂活。编程小白完全可以把它当"电脑管家"用。比如你有一个文件夹里塞满了乱七八糟的几百个下载文件，你可以打开终端告诉它："帮我把这个文件夹里的所有图片按年份建文件夹装好，把 PDF 单独放一个文件夹。"它能通过命令行工具，自动帮你把繁琐的本地文件整理得井井有条。
                <br><br>
                <strong>真实场景三：</strong>当你的"私人修理工"。当你在网上下载了一个好用的小工具，按照教程却怎么也打不开，电脑里弹出一堆看不懂的英文报错时。你可以直接把报错信息复制给 Claude Code 说："帮我看看这是怎么回事，把它修好。"它会自动去查阅错误原因，帮你安装缺失的电脑组件，直到程序成功跑起来。
            </div>`
        },
        {
            content: `<div class="step-title">④ 它不适合用来做什么？（你真的需要它吗？）</div>
            <div class="step-content">
                虽然 Claude Code 很强大，但它不是万能的：
                <br><br>
                <strong>不适合用来画图或闲聊：</strong>它不能帮你生成一张漂亮的风景海报，也不能实时陪你查今天的新闻八卦，它是一个纯粹为了操作文件和构建软件而生的工具。
                <br><br>
                <strong>不能完全闭着眼睛盲目信任：</strong>比如涉及到批量删除重要文件、修改包含密码的配置等操作时，绝对不能让它全自动瞎改。它虽然聪明，但在执行关键操作前，仍然需要你（人类）来人工审核并点击确认。
            </div>`
        }
    ],
    quiz: [
        {
            question: 'Claude Code 和 ChatGPT 最本质的区别是什么？',
            options: [
                { text: 'ChatGPT 写的代码一定比 Claude Code 好' },
                { text: 'ChatGPT 只能把代码打印在聊天框里让你自己去复制粘贴，而 Claude Code 可以自动在你电脑里"动手"创建和修改网页文件' },
                { text: 'Claude Code 需要懂很深的编程知识，ChatGPT 不需要' },
                { text: '没有任何本质区别，它们都是聊天机器人' }
            ],
            correct: 1,
            successMsg: '没错！ChatGPT 只能"动嘴"（告诉你怎么做），Claude Code 能"动手"（直接帮你做）。这就是"动嘴"和"动手"的本质区别！',
            explanation: 'ChatGPT 是对话式 AI，只能给你代码让你自己复制粘贴。而 Claude Code 是"智能体"（Agent），它能直接操作你的电脑——创建文件、写入代码、运行命令，就像一个在你电脑里干活的小助手。'
        }
    ]
};

window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['1'] = function(containerId) {
    var stepViewer = new StepViewer(containerId, MODULE_1.steps, '', MODULE_1.id, {
        nextModuleId: '2',
        onAfterQuizRendered: function(quizAreaId, nextBtnId) {
            new LessonQuiz(quizAreaId, MODULE_1.id, MODULE_1.quiz, function() {
                stepViewer.showNextModuleButton(nextBtnId);
            });
        }
    });
};
