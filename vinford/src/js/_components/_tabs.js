const clickToTab = () => {
    const $tabs = document.querySelector('.tabs');
    const $feature = document.querySelector('.features__content');
    const $featureTitle = $feature.querySelector('.features__subtitle');
    const $featureDesc = $feature.querySelector('.features__desc');
    const $featureImg = $feature.querySelector('picture');

    $tabs.addEventListener('click', (event) => {
        let tab = event.target.closest('.tab');
        [...$tabs.querySelectorAll('.tab')].forEach((tab) => tab.classList.remove('tab--active'));
        tab.classList.add('.tab--active');
        $featureTitle.textContent = tab.textContent;
        $featureDesc.textContent = tab.dataset.featureDesc;
        $featureImg.querySelector('img').setAttribute('src', `img\/${tab.dataset.featureImg}.jpg`);
        $featureImg.querySelector('img').setAttribute('alt', $featureDesc.textContent);
        $featureImg.querySelector('source').setAttribute('srcset', `img\/${tab.dataset.featureImg}.webp`);
    })
}

clickToTab();
