// Minimal UI logic for static mockup pages
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('molsw_theme', newTheme);
        });
        const savedTheme = localStorage.getItem('molsw_theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }

    // Sidebar Toggle (Mobile & Desktop)
    const sidebarBtn = document.getElementById('btn-collapse-sidebar');
    const sidebar = document.querySelector('aside');
    if (sidebarBtn && sidebar) {
        sidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    const mobileBtn = document.getElementById('mobile-burger-btn');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    // Profile Dropdown
    const profileBtn = document.getElementById('profile-dropdown-btn');
    const profileMenu = document.getElementById('profile-dropdown-menu');
    if (profileBtn && profileMenu) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!profileBtn.contains(e.target)) {
                profileMenu.classList.remove('active');
            }
        });
    }

    // Basic Modal Manager
    window.ModalManager = {
        open: function(modalId) {
            const overlay = document.getElementById(modalId);
            if (overlay) overlay.classList.add('active');
        },
        close: function(modalId) {
            const overlay = document.getElementById(modalId);
            if (overlay) overlay.classList.remove('active');
        }
    };
});
