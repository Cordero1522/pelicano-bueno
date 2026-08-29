function initNavToggle(): void {
    const toggleBtn = document.getElementById('nav-toggle');
    const navCats = document.getElementById('nav-cats');
    if (!toggleBtn || !navCats) return;

    toggleBtn.addEventListener('click', () => {
        const isOpen = navCats.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });
}

document.addEventListener('DOMContentLoaded', initNavToggle);