// localStorage工具函数

/**
 * 检查localStorage是否可用
 * @returns {boolean} localStorage是否可用
 */
function isLocalStorageAvailable() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        console.warn('localStorage不可用:', e.message);
        return false;
    }
}

/**
 * 获取安全的localStorage对象
 * 如果localStorage不可用，返回一个内存中的模拟对象
 * @returns {Object} 安全的存储对象
 */
function safeLocalStorage() {
    if (isLocalStorageAvailable()) {
        return localStorage;
    } else {
        // 返回一个内存中的模拟存储对象
        console.warn('使用内存存储替代localStorage');
        const memoryStorage = {
            _data: {},
            getItem: function(key) {
                return this._data[key] || null;
            },
            setItem: function(key, value) {
                this._data[key] = value;
            },
            removeItem: function(key) {
                delete this._data[key];
            },
            clear: function() {
                this._data = {};
            },
            get length() {
                return Object.keys(this._data).length;
            },
            key: function(index) {
                return Object.keys(this._data)[index] || null;
            }
        };
        return memoryStorage;
    }
}

/**
 * 安全地从localStorage读取数据
 * @param {string} key - 存储的key
 * @param {*} defaultValue - 默认值
 * @returns {*} 存储的值或默认值
 */
function safeGetItem(key, defaultValue = null) {
    try {
        const storage = safeLocalStorage();
        const value = storage.getItem(key);
        return value !== null ? value : defaultValue;
    } catch (e) {
        console.warn(`读取localStorage失败 [${key}]:`, e.message);
        return defaultValue;
    }
}

/**
 * 安全地向localStorage写入数据
 * @param {string} key - 存储的key
 * @param {*} value - 要存储的值
 * @returns {boolean} 是否成功
 */
function safeSetItem(key, value) {
    try {
        const storage = safeLocalStorage();
        storage.setItem(key, value);
        return true;
    } catch (e) {
        console.warn(`写入localStorage失败 [${key}]:`, e.message);
        return false;
    }
}

/**
 * 安全地从localStorage删除数据
 * @param {string} key - 要删除的key
 * @returns {boolean} 是否成功
 */
function safeRemoveItem(key) {
    try {
        const storage = safeLocalStorage();
        storage.removeItem(key);
        return true;
    } catch (e) {
        console.warn(`删除localStorage失败 [${key}]:`, e.message);
        return false;
    }
}

// 导出工具函数
window.isLocalStorageAvailable = isLocalStorageAvailable;
window.safeLocalStorage = safeLocalStorage;
window.safeGetItem = safeGetItem;
window.safeSetItem = safeSetItem;
window.safeRemoveItem = safeRemoveItem;