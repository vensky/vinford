"use strict";

const $body = document.querySelector('.js-body');
const $header = document.querySelector('.js-header');
const $btnNav = document.querySelector('.js-btnNav');
const $nav = document.querySelector('.js-nav');
const $formItems = document.querySelectorAll('.js-formItem');
const $accordeon = document.querySelector('.js-accordion');


window.addEventListener('scroll', () => {
    window.pageYOffset > 0 ? $header.classList.add('header--scroll') : $header.classList.remove('header--scroll');
});

$btnNav.addEventListener('click', () => {
    $btnNav.classList.toggle('btn-nav--active');
    $nav.classList.toggle('nav--active');
    $header.classList.toggle('header--active');
    $body.classList.toggle('no-scroll');
});

for (let $item of $formItems) {
    $item.addEventListener('click', () => {
        $item.querySelector('.form__label').classList.add('form__label--active');
    });
}

$accordeon.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('show');
    console.log(e.target.nextElementSibling)
});

const setupVideo = () => {
    let $video = document.querySelector('.video');
    let $link = $video.querySelector('.video__link');
    let $media = $video.querySelector('.video__media');
    let $button = $video.querySelector('.video__btn');
    let id = parseMediaURL($media);

    $video.addEventListener('click', () => {
        let $iframe = createIframe(id);

        $link.remove();
        $button.remove();
        $video.appendChild($iframe);
    });

    $link.removeAttribute('href');
    $video.classList.add('video--enabled');
}

const parseMediaURL = (media) => {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

const createIframe = (id) => {
    let $iframe = document.createElement('iframe');

    $iframe.setAttribute('allowfullscreen', '');
    $iframe.setAttribute('allow', 'autoplay');
    $iframe.setAttribute('src', generateURL(id));
    $iframe.classList.add('video__media');

    return $iframe;
}

const generateURL = (id) => {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

setupVideo();
