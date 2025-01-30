const navToggle = document.querySelector('.nav-toggle');
const sideNav = document.querySelector('.side-nav');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
    sideNav.classList.toggle('expanded');
});

function setSideNavTop() {
    const headerHeight = header.offsetHeight;
    sideNav.style.top = `${headerHeight}px`;
    sideNav.style.transform = `translateY(0)`;
}

setSideNavTop();
window.addEventListener('resize', setSideNavTop);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});