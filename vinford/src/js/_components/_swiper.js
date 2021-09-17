let init = false;
let swiper = Swiper;

const swiperInit = () => {
    let desktop = window.matchMedia('(min-width: 1434px)');

    if (!desktop.matches) {
        if (!init) {
            init = true;

            swiper = new Swiper('.swiper', {
                slidesPerView: 'auto',
                on: {
                    slideChange: () => {
                        if (swiper.isEnd) {
                            swiper.wrapperEl.style.marginLeft = '-200px';
                            swiper.el.classList.remove('swiper--endGradient');
                        } else {
                            swiper.wrapperEl.style.marginLeft = '0px';
                            swiper.el.classList.add('swiper--endGradient');
                        }

                        if (swiper.isBeginning) {
                            swiper.el.classList.remove('swiper--startGradient');
                        } else {
                            swiper.el.classList.add('swiper--startGradient');
                        }
                    }
                },
                breakpoints: {
                    1024: {
                        grid: {
                            rows: 2,
                        },
                    },
                    1434: {
                        enabled: false,
                    }
                },
            });
        } else {
            swiper.destroy();
            init = false;
        }
    }
}

window.addEventListener('load', function() {
    swiperInit();
});

window.addEventListener('resize', () => {
    swiperInit();
})
