// 反馈页面
window.moduleLoaders = window.moduleLoaders || {};
window.moduleLoaders['feedback'] = function(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.className = 'feedback-page';
    container.innerHTML = '';

    // 标题区
    var header = document.createElement('div');
    header.className = 'feedback-header';
    header.innerHTML = '<h1>你的反馈对我们很重要 🙏</h1>' +
        '<p class="feedback-subtitle">花1分钟告诉我们你的学习体验，<br>帮助我们把教程做得更好</p>';
    container.appendChild(header);

    // 按钮区
    var btnSection = document.createElement('div');
    btnSection.className = 'feedback-btn-section';
    var btn = document.createElement('a');
    btn.href = 'https://wj.qq.com/s2/26522952/0825/';
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.className = 'feedback-survey-btn';
    btn.textContent = '点击填写反馈问卷 →';
    btnSection.appendChild(btn);
    container.appendChild(btnSection);

    // 提示小字
    var hint = document.createElement('p');
    hint.className = 'feedback-hint';
    hint.textContent = '问卷共6题，约需1分钟，感谢你的支持！';
    container.appendChild(hint);

    // 返回按钮
    var backSection = document.createElement('div');
    backSection.className = 'feedback-back-section';
    var backBtn = document.createElement('button');
    backBtn.className = 'feedback-back-btn';
    backBtn.textContent = '← 返回模块8';
    backBtn.addEventListener('click', function() {
        if (window.app) window.app.navigateToModule('8');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    backSection.appendChild(backBtn);
    container.appendChild(backSection);
};
