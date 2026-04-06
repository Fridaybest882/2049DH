// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    // 设置导航栏活跃状态
    updateActiveNav();
    
    // 平滑滚动
    setupSmoothScroll();
});

// 更新导航栏活跃状态
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 平滑滚动
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 搜索功能（如需要）
function searchTools(query) {
    console.log('搜索：', query);
    // 搜索逻辑实现
}
