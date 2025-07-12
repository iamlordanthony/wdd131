// Footer dynamic year and modified date
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const modSpan = document.getElementById('lastModified');
    yearSpan.textContent = new Date().getFullYear();
    modSpan.textContent = document.lastModified;

    // Hamburger menu
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
