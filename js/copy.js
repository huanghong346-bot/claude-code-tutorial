// 代码复制功能
class CodeCopyButton {
    constructor() {
        this.init();
    }

    // 初始化
    init() {
        this.addCopyButtons();
        this.initEventListeners();
    }

    // 添加复制按钮到所有代码块
    addCopyButtons() {
        // 查找所有<code>和<pre>元素
        const codeElements = document.querySelectorAll('code, pre');

        codeElements.forEach(element => {
            // 跳过已经在代码容器中的元素
            if (element.closest('.code-container')) return;

            // 获取代码内容
            const codeText = element.textContent.trim();

            // 如果内容为空，跳过
            if (!codeText) return;

            // 创建代码容器
            const codeContainer = document.createElement('div');
            codeContainer.className = 'code-container';

            // 创建复制按钮
            const copyButton = document.createElement('button');
            copyButton.className = 'code-copy-btn';
            copyButton.innerHTML = '复制';

            // 将元素包装在容器中
            if (element.tagName === 'PRE') {
                element.parentNode.insertBefore(codeContainer, element);
                codeContainer.appendChild(element);
                codeContainer.insertBefore(copyButton, element);
            } else {
                // 如果是<code>元素，先找到它的父<pre>元素
                const parentPre = element.closest('pre');
                if (parentPre) {
                    parentPre.parentNode.insertBefore(codeContainer, parentPre);
                    codeContainer.appendChild(parentPre);
                    codeContainer.insertBefore(copyButton, parentPre);
                } else {
                    // 如果没有父<pre>元素，直接包装<code>
                    element.parentNode.insertBefore(codeContainer, element);
                    codeContainer.appendChild(element);
                    codeContainer.insertBefore(copyButton, element);
                }
            }
        });
    }

    // 初始化事件监听（用于动态添加的代码块）
    initEventListeners() {
        // 使用事件委托处理复制按钮点击
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('code-copy-btn') || e.target.closest('.code-copy-btn')) {
                const button = e.target.classList.contains('code-copy-btn') ? e.target : e.target.closest('.code-copy-btn');
                this.handleCopyClick(button);
            }
        });
    }

    // 处理复制按钮点击
    handleCopyClick(button) {
        // 找到对应的代码容器
        const container = button.closest('.code-container');
        if (!container) return;

        // 获取代码内容
        const codeElement = container.querySelector('code');
        const codeText = codeElement ? codeElement.textContent.trim() : '';

        if (!codeText) return;

        // 复制到剪贴板
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(codeText)
                .then(() => this.showCopySuccess(button))
                .catch((err) => {
                    console.warn('Clipboard API 失败，尝试降级方案', err);
                    this.fallbackCopy(codeText, button);
                });
        } else {
            this.fallbackCopy(codeText, button);
        }
    }

    // 降级复制方案
    fallbackCopy(text, button) {
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            textArea.style.top = '0';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();

            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);

            if (successful) {
                this.showCopySuccess(button);
            } else {
                this.showCopyError(button);
            }
        } catch (err) {
            console.error('复制失败', err);
            this.showCopyError(button);
        }
    }

    // 显示复制成功状态
    showCopySuccess(button) {
        const originalText = button.textContent;
        button.textContent = '✓ 已复制';
        button.style.background = '#4caf50';

        // 2秒后恢复原状
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }

    // 显示复制错误状态
    showCopyError(button) {
        const originalText = button.textContent;
        button.textContent = '✗ 失败';
        button.style.background = '#f44336';

        // 2秒后恢复原状
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }

    // 手动重新添加复制按钮（用于动态内容加载）
    refresh() {
        this.addCopyButtons();
    }
}

// 导出供其他文件使用
window.CodeCopyButton = CodeCopyButton;