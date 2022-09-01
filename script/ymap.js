ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [52.029070, 29.248795],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([52.339070, 29.248795], {
            hintContent: 'Собственный значок метки',
        }, {

            iconLayout: 'default#image',
            iconImageHref: 'images/myIcon.gif',
            iconImageSize: [60, 90],
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([52.029580, 29.248395], {
            hintContent: 'Собственный значок метки с контентом',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/img/mdi_location_on.svg',
            iconImageSize: [60, 90],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout,
        });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
  });