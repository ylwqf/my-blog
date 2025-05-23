// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 初始化导航栏状态
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    // 检查本地存储中的导航栏状态
    const navState = localStorage.getItem('navState');
    if (navState === 'hidden') {
        sidebar.classList.add('hidden');
    }

    // 监听窗口大小变化
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden');
        }
    });
}); 