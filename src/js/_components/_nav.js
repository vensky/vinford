const $body = document.querySelector('body');
const $anchors = document.querySelectorAll('a[href*="#"]');
const $btnNav = document.querySelector('.btn-nav');
const $nav = document.querySelector('.header__nav');

const scrollToAnchor = (anchors, btnNav, nav, body) => {
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            btnNav.classList.remove('btn-nav--active');
            nav.classList.remove('nav--active');
            body.classList.remove('no-scroll');

            const blockID = anchor.getAttribute('href').slice(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

const openNav = (btnNav, nav, body) => {
    btnNav.addEventListener('click', () => {
        btnNav.classList.toggle('btn-nav--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('no-scroll');
    });
}

scrollToAnchor($anchors, $btnNav, $nav, $body);
openNav($btnNav, $nav, $body);
