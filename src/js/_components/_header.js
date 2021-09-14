const $header = document.querySelector('.header');

const headerScroll = () => {
    window.addEventListener('scroll', () => {
        window.pageYOffset > 0 ? $header.classList.add('header--scroll') : $header.classList.remove('header--scroll');
    });
}

headerScroll();
