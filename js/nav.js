// 导航栏交互
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleNav');
    const sidebar = document.querySelector('.sidebar');

    // 切换导航栏显示/隐藏
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');

        // 保存导航栏状态到本地存储
        const navState = sidebar.classList.contains('hidden') ? 'hidden' : 'visible';
        localStorage.setItem('navState', navState);
    });

    // 点击导航链接时，在移动设备上自动隐藏导航栏
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                sidebar.classList.add('hidden');
                localStorage.setItem('navState', 'hidden');
            }
        });
    });
}); 