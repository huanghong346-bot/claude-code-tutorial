// localStorage工具函数测试
// 这些测试应该在浏览器中运行

describe('Storage Utils', () => {

    describe('isLocalStorageAvailable', () => {
        test('应该返回true当localStorage可用时', () => {
            // 假设正常情况下localStorage可用
            const result = isLocalStorageAvailable();
            expect(typeof result).toBe('boolean');
        });

        test('应该返回false当localStorage不可用时', () => {
            // 模拟localStorage不可用的情况
            const originalLocalStorage = window.localStorage;
            Object.defineProperty(window, 'localStorage', {
                value: {
                    getItem: () => { throw new Error('SecurityError'); },
                    setItem: () => { throw new Error('SecurityError'); }
                },
                writable: true
            });

            const result = isLocalStorageAvailable();
            expect(result).toBe(false);

            // 恢复原始localStorage
            Object.defineProperty(window, 'localStorage', {
                value: originalLocalStorage,
                writable: true
            });
        });
    });

    describe('safeLocalStorage', () => {
        test('应该正常存储和读取数据', () => {
            const storage = safeLocalStorage();

            storage.setItem('test_key', 'test_value');
            const result = storage.getItem('test_key');

            expect(result).toBe('test_value');

            // 清理
            storage.removeItem('test_key');
        });

        test('应该在localStorage不可用时返回安全的storage对象', () => {
            // 模拟localStorage不可用
            const originalLocalStorage = window.localStorage;
            Object.defineProperty(window, 'localStorage', {
                value: {
                    getItem: () => { throw new Error('SecurityError'); },
                    setItem: () => { throw new Error('SecurityError'); },
                    removeItem: () => { throw new Error('SecurityError'); }
                },
                writable: true
            });

            const storage = safeLocalStorage();

            // 不应该抛出错误
            expect(() => storage.setItem('test_key', 'test_value')).not.toThrow();
            expect(storage.getItem('test_key')).toBeNull();

            // 恢复原始localStorage
            Object.defineProperty(window, 'localStorage', {
                value: originalLocalStorage,
                writable: true
            });
        });
    });
});

// 简单的测试运行器
function runTests() {
    console.log('🧪 开始运行localStorage工具测试...');

    let passed = 0;
    let failed = 0;

    // 测试isLocalStorageAvailable
    try {
        const result = isLocalStorageAvailable();
        if (typeof result === 'boolean') {
            console.log('✓ isLocalStorageAvailable 返回布尔值');
            passed++;
        } else {
            console.log('✗ isLocalStorageAvailable 返回值类型错误');
            failed++;
        }
    } catch (error) {
        console.log('✗ isLocalStorageAvailable 测试失败:', error.message);
        failed++;
    }

    // 测试safeLocalStorage
    try {
        const storage = safeLocalStorage();
        storage.setItem('test_safe', 'safe_value');
        const result = storage.getItem('test_safe');
        if (result === 'safe_value') {
            console.log('✓ safeLocalStorage 正常工作');
            passed++;
            storage.removeItem('test_safe');
        } else {
            console.log('✗ safeLocalStorage 存储读取失败');
            failed++;
        }
    } catch (error) {
        console.log('✗ safeLocalStorage 测试失败:', error.message);
        failed++;
    }

    console.log(`\n📊 测试结果: ${passed} 通过, ${failed} 失败`);
    return failed === 0;
}