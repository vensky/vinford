var preschools = [{
        "id": "0",
        "title": "Все садики на карте",
        "address": "Все садики на карте",
        "tel": "8 800 55 9516",
        "latlng": {
            "lat": 55.7515,
            "lng": 37.6197
        }
    },
    {
        "id": "1",
        "title": "Детский сад Vinford",
        "address": "г. Москва, Смоленский бульвар, 22",
        "tel": "8 800 55 9516",
        "latlng": {
            "lat": 55.7577,
            "lng": 37.6002
        }
    },
    {
        "id": "2",
        "title": "Детский сад Vinford",
        "address": "г. Москва, Ленинский проспект, 9",
        "tel": "8 800 55 9516",
        "latlng": {
            "lat": 55.7625,
            "lng": 37.6468
        }
    },
    {
        "id": "3",
        "title": "Детский сад Vinford",
        "address": "г. Москва, Майский проспект, 29",
        "tel": "8 800 55 9516",
        "latlng": {
            "lat": 55.7502,
            "lng": 37.6599
        }
    },
    {
        "id": "4",
        "title": "Детский сад Vinford",
        "address": "г. Москва, пл. Восстания, 2",
        "tel": "8 800 55 9516",
        "latlng": {
            "lat": 55.7366,
            "lng": 37.6544
        }
    }
];

var currentContacts = '0';
var markersArr = [];

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
    var markers = [];

    for (var i = 0; i < preschools.length; i++) {
        var marker = new google.maps.Marker({
            position: preschools[i].latlng,
            map: map,
            icon: icon,
            id: i
        });

        google.maps.event.addListener(marker, 'click', (function() {
            for (var j = 0; j < markers.length; j++) {
                // markers[j].setIcon(icon);
                markers[j].setVisible(false);
            }
                this.setIcon(iconActive);
                this.setVisible(true);
                currentContacts = marker.id;
            })
        );

        markers.push(marker);
    }

    markersArr = markers;
}

google.maps.event.addDomListener(window, 'load', initialize);





