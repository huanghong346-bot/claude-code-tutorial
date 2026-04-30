// 评分打赏弹窗组件
var RatingModal = (function() {
    'use strict';

    var RATING_KEYS = {
        '3': 'cc_tutorial_rating_1',
        '7': 'cc_tutorial_rating_2'
    };

    function RatingModal(moduleId, onClose) {
        this.moduleId = moduleId;
        this.storageKey = RATING_KEYS[moduleId];
        this.onClose = onClose || function() {};
        this.stars = 0;
        this.donated = false;
        this.overlay = null;
        this.modal = null;
    }

    RatingModal.prototype.show = function() {
        // 检查是否已经弹过
        if (this.storageKey) {
            try {
                var existing = localStorage.getItem(this.storageKey);
                if (existing) return this.onClose();
            } catch (e) { /* ignore */ }
        }

        this._createOverlay();
        this._renderRating();
    };

    RatingModal.prototype._createOverlay = function() {
        var self = this;

        // 遮罩
        this.overlay = document.createElement('div');
        this.overlay.className = 'rating-overlay';
        this.overlay.addEventListener('click', function(e) {
            if (e.target === self.overlay) self.close();
        });

        // 弹窗容器
        this.modal = document.createElement('div');
        this.modal.className = 'rating-modal';

        this.overlay.appendChild(this.modal);
        document.body.appendChild(this.overlay);

        // 触发淡入
        requestAnimationFrame(function() {
            self.overlay.classList.add('visible');
        });
    };

    // ====== 第一步：评分 ======
    RatingModal.prototype._renderRating = function() {
        var self = this;

        var html = '';
        html += '<button class="rating-close-btn" aria-label="关闭">✕</button>';
        html += '<h2 class="rating-title">学到这里，感觉怎么样？</h2>';
        html += '<div class="rating-stars">';
        for (var i = 1; i <= 5; i++) {
            html += '<span class="rating-star" data-star="' + i + '" role="button" aria-label="' + i + '星">★</span>';
        }
        html += '</div>';

        this.modal.innerHTML = html;

        // 关闭按钮
        this.modal.querySelector('.rating-close-btn').addEventListener('click', function() {
            self._saveAndClose(0);
        });

        // 星星交互
        var stars = this.modal.querySelectorAll('.rating-star');
        var currentHover = 0;

        stars.forEach(function(star) {
            star.addEventListener('mouseenter', function() {
                currentHover = parseInt(this.getAttribute('data-star'));
                self._highlightStars(currentHover);
            });
            star.addEventListener('mouseleave', function() {
                currentHover = 0;
                self._highlightStars(self.stars);
            });
            star.addEventListener('click', function() {
                self.stars = parseInt(this.getAttribute('data-star'));
                self._highlightStars(self.stars);
                // 短暂延迟后进入第二步
                setTimeout(function() {
                    self._handleRatingResult();
                }, 300);
            });
            // 移动端：使用 touchend 提高响应速度
            star.addEventListener('touchend', function(e) {
                e.preventDefault();
                self.stars = parseInt(this.getAttribute('data-star'));
                self._highlightStars(self.stars);
                setTimeout(function() {
                    self._handleRatingResult();
                }, 300);
            });
        });
    };

    RatingModal.prototype._highlightStars = function(count) {
        var stars = this.modal.querySelectorAll('.rating-star');
        stars.forEach(function(star) {
            var s = parseInt(star.getAttribute('data-star'));
            if (s <= count) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    };

    // ====== 第二步：根据评分分支 ======
    RatingModal.prototype._handleRatingResult = function() {
        if (this.stars >= 4) {
            this._renderDonationPrompt();
        } else {
            this._renderThanks();
        }
    };

    // 第二步A：1-3星 → 感谢
    RatingModal.prototype._renderThanks = function() {
        var self = this;

        this.modal.innerHTML =
            '<div class="rating-thanks">' +
            '<p class="text-4xl mb-3">💪</p>' +
            '<p class="text-lg font-bold text-gray-800 mb-2">感谢你的反馈！</p>' +
            '<p class="text-sm text-gray-500">我们会继续改进</p>' +
            '</div>';

        this._saveAndClose(this.stars, 1500);
    };

    // 第二步B：4-5星 → 打赏引导
    RatingModal.prototype._renderDonationPrompt = function() {
        var self = this;

        this.modal.innerHTML =
            '<div class="rating-donate">' +
            '<p class="text-4xl mb-2">🎉</p>' +
            '<p class="text-lg font-bold text-gray-800 mb-1">太开心了！</p>' +
            '<p class="text-sm text-gray-500 mb-4">如果这个教程帮到了你，要不要请作者喝杯咖啡？</p>' +
            '<div class="rating-buttons">' +
            '<button class="rating-btn-primary">好呀，扫码支付 ☕</button>' +
            '<button class="rating-btn-secondary">下次吧</button>' +
            '</div>' +
            '</div>';

        this.modal.querySelector('.rating-btn-primary').addEventListener('click', function() {
            self._renderQRCode();
        });
        this.modal.querySelector('.rating-btn-secondary').addEventListener('click', function() {
            self._saveAndClose(self.stars);
        });
    };

    // ====== 第三步：二维码 ======
    RatingModal.prototype._renderQRCode = function() {
        var self = this;
        this.donated = true;

        this.modal.innerHTML =
            '<div class="rating-qr">' +
            '<p class="text-lg font-bold text-gray-800 mb-4">感谢支持！请选择支付方式</p>' +
            '<div class="rating-qr-row">' +
            '<div class="rating-qr-item">' +
            '<img src="images/wechat-pay.png" alt="微信支付" class="rating-qr-img">' +
            '<p class="rating-qr-label">微信支付</p>' +
            '</div>' +
            '<div class="rating-qr-item">' +
            '<img src="images/alipay.png" alt="支付宝" class="rating-qr-img">' +
            '<p class="rating-qr-label">支付宝</p>' +
            '</div>' +
            '</div>' +
            '<button class="rating-done-btn">已完成支付，谢谢！</button>' +
            '</div>';

        this.modal.querySelector('.rating-done-btn').addEventListener('click', function() {
            self._saveAndClose(self.stars);
        });
    };

    // ====== 保存并关闭 ======
    RatingModal.prototype._saveAndClose = function(stars, delay) {
        var self = this;
        delay = delay || 0;

        // 保存到 localStorage
        if (this.storageKey && this.stars > 0) {
            try {
                localStorage.setItem(this.storageKey, JSON.stringify({
                    stars: this.stars,
                    time: Date.now(),
                    donated: this.donated
                }));
            } catch (e) { /* ignore */ }
        }

        if (delay > 0) {
            setTimeout(function() { self.close(); }, delay);
        } else {
            this.close();
        }
    };

    RatingModal.prototype.close = function() {
        var self = this;
        if (this.overlay) {
            this.overlay.classList.remove('visible');
            setTimeout(function() {
                if (self.overlay && self.overlay.parentNode) {
                    self.overlay.parentNode.removeChild(self.overlay);
                }
                self.overlay = null;
                self.modal = null;
                self.onClose();
            }, 300);
        } else {
            this.onClose();
        }
    };

    // ====== 静态方法：检查并弹窗 ======
    RatingModal.checkAndShow = function(moduleId, onClose) {
        var key = RATING_KEYS[moduleId];
        if (!key) {
            if (onClose) onClose();
            return;
        }

        try {
            if (localStorage.getItem(key)) {
                if (onClose) onClose();
                return;
            }
        } catch (e) { /* ignore */ }

        var modal = new RatingModal(moduleId, onClose);
        modal.show();
    };

    return RatingModal;
})();

window.RatingModal = RatingModal;
