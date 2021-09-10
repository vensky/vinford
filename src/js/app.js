'use strict';

@@include('./_components/_swiper.js');

const swiperProjects = new Swiper('.projects__swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination--projects',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--projects',
        prevEl: '.swiper-button-prev--projects',
    },
});

const swiperPersonal = new Swiper('.personal__swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination--personal',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--personal',
        prevEl: '.swiper-button-prev--personal',
    },
});

const swiperBonus = new Swiper('.bonus__swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination--bonus',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--bonus',
        prevEl: '.swiper-button-prev--bonus',
    },
});
