const initCustomSelect = (el) => {
console.log(markersArr)
    const $selectNative = el.querySelector('.select-native');
    const $selectCustom = el.querySelector('.select-custom');
    const $selectCustomTrigger = $selectCustom.querySelector('.select-custom__trigger');
    const $selectCustomOptions = $selectCustom.querySelector('.select-custom__options');

    let optionSelected = '';

    const $contactsListAll = document.querySelector('.contacts__list--all');
    const $contactsListSingle = document.querySelector('.contacts__list--single');
    let currentOptionId = '0';

    const watchClickOutside = (e) => {
        const didClickedOutside = !$selectCustom.contains(e.target);
        if (didClickedOutside) {
            closeSelectCustom();
        }
    };

    const openSelectCustom = () => {
        $selectCustom.classList.add('select-custom--active');
        $selectCustom.setAttribute('aria-hidden', false);
        document.addEventListener('click', watchClickOutside);
    };

    const closeSelectCustom = () => {
        $selectCustom.classList.remove('select-custom--active');
        $selectCustom.setAttribute('aria-hidden', true);

        document.removeEventListener('click', watchClickOutside);
    };

    const updateSelectOption = (value) => {
        const prevValue = optionSelected;
        const $prevOption = $selectCustomOptions.querySelector(`[data-value="${prevValue}"`);
        const $option = $selectCustomOptions.querySelector(`[data-value="${value}"`);

        if ($prevOption) {
            $prevOption.classList.remove('select-custom__option--active');
        }

        if ($option) {
            $option.classList.add('select-custom__option--active');
        }

        $selectNative.value = value;
        $selectCustomTrigger.textContent = $option.textContent;
        optionSelected = value;

        if (value === "0") {
            $contactsListAll.classList.remove('contacts__list--hidden');
            $contactsListSingle.classList.add('contacts__list--hidden');
            for (let marker of markersArr) {
                marker.setVisible(true);
                marker.setIcon(icon);
            }
        } else {
            $contactsListAll.classList.add('contacts__list--hidden');
            $contactsListSingle.classList.remove('contacts__list--hidden');
            $contactsListSingle.querySelector('.contacts__subtitle').textContent = preschools[value].address;
            $contactsListSingle.querySelector('.contacts__link').textContent = preschools[value].tel;
        }
    };

    $selectCustomTrigger.addEventListener('click', () => {
        const isSelectClosed = !$selectCustom.classList.contains('select-custom--active');
        isSelectClosed ? openSelectCustom() : closeSelectCustom();
    });

    $selectNative.addEventListener('change', (e) => {
        updateSelectOption(e.target.value);
    });

    $selectCustomOptions.addEventListener('click', (e) => {
        if (e.target.dataset.value) {
            updateSelectOption(e.target.dataset.value);
        }

        closeSelectCustom();
    });
};

const selectContacts = document.querySelector('.contacts__select');
initCustomSelect(selectContacts);
