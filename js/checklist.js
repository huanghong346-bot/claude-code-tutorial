// 可勾选检查清单组件（用于学习模块）
class Checklist {
    constructor(containerId, items, options) {
        this.containerId = containerId;
        this.items = items; // [{id, text}]
        options = options || {};
        this.storageKey = options.storageKey || 'claude_code_checklist_default';
        this.title = options.title || '准备就绪检查清单';
        this.readyText = options.readyText || '全部准备就绪！可以进入下一步了。';
        this.init();
    }

    init() {
        this.loadState();
        this.render();
    }

    loadState() {
        var saved = safeGetItem(this.storageKey, '{}');
        try {
            this.checked = JSON.parse(saved);
        } catch (e) {
            this.checked = {};
        }
    }

    saveState() {
        safeSetItem(this.storageKey, JSON.stringify(this.checked));
    }

    allChecked() {
        var self = this;
        return this.items.every(function(item) { return self.checked[item.id]; });
    }

    render() {
        var container = document.getElementById(this.containerId);
        if (!container) return;

        var self = this;
        var itemsHtml = this.items.map(function(item, i) {
            var checked = self.checked[item.id] || false;
            return '<label class="checklist-item flex items-start gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-orange-50 hover:border-orange-300 transition-all duration-200">' +
                '<input type="checkbox" class="checklist-checkbox mt-0.5 w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 flex-shrink-0" ' +
                'data-item-id="' + item.id + '" ' +
                (checked ? 'checked' : '') + '>' +
                '<span class="text-sm text-gray-700 leading-relaxed">' + item.text + '</span>' +
                '</label>';
        }).join('');

        var allDone = this.allChecked();

        container.innerHTML =
            '<div class="checklist-wrapper bg-white rounded-xl border-2 border-orange-200 p-5 mt-2">' +
            '<h3 class="text-lg font-bold text-gray-800 mb-4">' + this.title + '</h3>' +
            '<div class="checklist-items space-y-2">' + itemsHtml + '</div>' +
            '<div class="checklist-ready-msg mt-4 p-3 bg-green-50 border border-green-300 rounded-lg text-green-700 font-medium text-center text-sm"' +
            (allDone ? '' : ' style="display:none"') + '>' +
            '✅ ' + this.readyText +
            '</div>' +
            '</div>';

        this.bindEvents();
    }

    bindEvents() {
        var container = document.getElementById(this.containerId);
        if (!container) return;

        var self = this;
        var checkboxes = container.querySelectorAll('.checklist-checkbox');
        checkboxes.forEach(function(cb) {
            cb.addEventListener('change', function() {
                var itemId = this.getAttribute('data-item-id');
                self.checked[itemId] = this.checked;
                self.saveState();
                self.updateReadyMessage();
            });
        });
    }

    updateReadyMessage() {
        var container = document.getElementById(this.containerId);
        if (!container) return;
        var msg = container.querySelector('.checklist-ready-msg');
        if (msg) {
            msg.style.display = this.allChecked() ? 'block' : 'none';
        }
    }

    // 外部调用：重新渲染
    refresh() {
        this.loadState();
        this.render();
    }
}

window.Checklist = Checklist;
