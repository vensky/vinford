const $slider = document.querySelector('.slider');
const $slideList = $slider.querySelector('.slider__list');
const $slides = $slideList.querySelectorAll('.slider__item');
const slidesLen = $slides.length;
const currentSlideClass = 'slider__item--active';

const $paginationList = $slider.querySelector('.slider__pagination');
const $paginations = $paginationList.querySelectorAll('.slider__bullet');
const currentPaginationClass = 'slider__bullet--active';

let currentSlideIndex = 0;
let swipeDirection = 0;

const goToSlide = (slideIndex) => {
    $slides[currentSlideIndex].classList.remove(currentSlideClass);

    for (let item of $paginations) {
        item.classList.remove(currentPaginationClass);
    }

    currentSlideIndex = slideIndex  % slidesLen;
    $slides[currentSlideIndex].classList.add(currentSlideClass);
    $paginations[currentSlideIndex].classList.add(currentPaginationClass);
}


$slideList.ondragstart = () => false;
$slideList.addEventListener('pointerdown', (event) => {
    swipeDirection = event.clientX;
});
$slideList.addEventListener('pointerup', (event) => {
    (swipeDirection - event.clientX) >= 0 ? goToSlide(currentSlideIndex + 1) : goToSlide(currentSlideIndex - 1 + slidesLen);
});

$paginationList.addEventListener('click', (event) => {
    let pagination = event.target.closest('.slider__bullet');

    if (pagination) {
        currentSlideIndex = pagination.dataset.slideNumber - 1;

        for (let i = 0; i < $slides.length; i++) {
            $slides[i].classList.remove(currentSlideClass);
            $paginations[i].classList.remove(currentPaginationClass);
        }

        $slides[currentSlideIndex].classList.add(currentSlideClass);
        $paginations[currentSlideIndex].classList.add(currentPaginationClass);
    }
});
