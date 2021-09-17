const initCustomSelect = (el) => {


    /*------GoogelMaps--------*/

    var apiKey = 'AIzaSyDrHToX9u5kf_XnbgIEioQkQIYMT-yYiDY';
    var map;
    var icon = {
        url: 'img/icon-map-marker.svg',
        scaledSize: new google.maps.Size(47, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    var iconActive = {
        url: 'img/icon-map-marker.svg',
        scaledSize: new google.maps.Size(73, 90),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    var markers = [];

    function initialize() {
        if (document.getElementById('googlemaps') === null) {
            return;
        }

        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(55.7515, 37.6197),
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            styles: [{
                stylers: [
                    { lightness: 45 }
                ]
            }]
        };

        var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

        for (let i = 1; i < preschools.length; i++) {
            var marker = new google.maps.Marker({
                position: preschools[i].latlng,
                map: map,
                icon: icon,
                id: String(i)
            });
            markers.push(marker);
        }

        for (let marker of markers) {
            google.maps.event.addListener(marker, 'click', (function() {
                for (let j = 0; j < markers.length; j++) {
                    markers[j].setVisible(false);
                }
                marker.setIcon(iconActive);
                marker.setVisible(true);
                updateSelectOption(marker.id);
            }));
        }
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    /* ---------- */

    const $selectNative = el.querySelector('.select-native');
    const $selectCustom = el.querySelector('.select-custom');
    const $selectCustomTrigger = $selectCustom.querySelector('.select-custom__trigger');
    const $selectCustomOptions = $selectCustom.querySelector('.select-custom__options');

    let optionSelected = '';

    const $contactsListAll = document.querySelector('.contacts__list--all');
    const $contactsListSingle = document.querySelector('.contacts__list--single');

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
            for (let marker of markers) {
                marker.setVisible(true);
                marker.setIcon(icon);
            }
        } else {
            $contactsListAll.classList.add('contacts__list--hidden');
            $contactsListSingle.classList.remove('contacts__list--hidden');
            $contactsListSingle.querySelector('.contacts__subtitle').textContent = preschools[value].address;
            $contactsListSingle.querySelector('.contacts__link').textContent = preschools[value].tel;

            for (let marker of markers) {
                console.log(marker.id, value)
                if (marker.id !== value) {
                    marker.setVisible(false);
                } else {
                    marker.setVisible(true);
                    marker.setIcon(iconActive);
                }
            }
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

