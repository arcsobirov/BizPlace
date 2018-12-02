ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [41.31, 69.26],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
    myGeoObject = new ymaps.GeoObject( {
        preset: 'islands#blackStretchyIcon',
        
    });
    var myCircle = new ymaps.Circle([
        [41.31, 69.26],
        500
    ], {
        balloonContent: "Радиус круга - 1 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var SecondCircle = new ymaps.Circle([
        [41.307314, 69.287585],
        500
    ], {
        balloonContent: "Радиус круга - 1 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var ThirdCircle = new ymaps.Circle([
        [41.320725, 69.255457],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var FourtCircle = new ymaps.Circle([
        [41.330004, 69.284205],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var FifthCircle = new ymaps.Circle([
        [41.295770, 69.268717],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var SixthCircle = new ymaps.Circle([
        [41.324086, 69.345213],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var SeveththCircle = new ymaps.Circle([
        [41.350383, 69.346372],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var EighthCircle = new ymaps.Circle([
        [41.313244, 69.269605],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var NinethCircle = new ymaps.Circle([
        [41.312208, 69.241624],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var TenthCircle = new ymaps.Circle([
        [41.297516, 69.205111],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
        var EleventhCircle = new ymaps.Circle([
        [41.304390, 69.272030],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });        
    var TwelvethCircle = new ymaps.Circle([
        [41.302090, 69.278116],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
    var ThirteenthCircle = new ymaps.Circle([
        [41.298190, 69.272280],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
    var FourteenthCircle = new ymaps.Circle([
        [41.309672, 69.306044],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff000026",
        strokeColor: "#00000052",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });
    var alotstud = new ymaps.Circle([
        [41.311234, 69.279068],
        500
    ], {
        balloonContent: "Радиус круга - 11 км",
        hintContent: "Уровень"
    }, {
        fillColor: "#ff00003d",
        strokeColor: "#0000003d",
        strokeOpacity: 0.8,
        strokeWidth: 0
    });

    myMap.geoObjects.add(myCircle);
    myMap.geoObjects.add(ThirdCircle);
    myMap.geoObjects.add(SecondCircle);
    myMap.geoObjects.add(FifthCircle);
    myMap.geoObjects.add(FourtCircle);
    myMap.geoObjects.add(SixthCircle);
    myMap.geoObjects.add(SeveththCircle);
    myMap.geoObjects.add(ThirteenthCircle);
    myMap.geoObjects.add(EighthCircle);
    myMap.geoObjects.add(NinethCircle);
    myMap.geoObjects.add(TenthCircle);
    myMap.geoObjects.add(EleventhCircle);
    myMap.geoObjects.add(FourteenthCircle);
    myMap.geoObjects.add(TwelvethCircle);
    myMap.geoObjects.add(alotstud);
   myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([41.296768, 69.282618], {
            balloonContent: '<i class="mesto">Идеально подходящее место для вашего бизнеса (Учебный Центр)</i><br><hr><strong>Комнат:</strong> 11<br><strong>Площадь:</strong> 300 м²<br><strong>Цена:</strong> 5 422 у. е.<br><strong>Школы:</strong> Средняя школа №94,  Средняя школа №60,  Средняя школа №328,  Средняя школа №145<br>Детский сад: Детский сад №506 "Камалак", Детский сад №247<br>Ориентиры:   Станции метро: Ташкент, Минг Урик, Ойбек'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([41.307150, 69.27118], {
            balloonContent: '<i class="mesto">Свободное помещение (Учебный Центр)</i><br><hr><strong>Комнат:</strong> 5<br><strong>Площадь:</strong> 90 м²<br><strong>Цена:</strong> 1 400 у. е.<br><strong>Школы:</strong> Средняя школа №110<br>Торговый центр:: Poytaxt<br>Супермаркет: Korzinka.uz(Туркменский)<br><strong>Станции метро:</strong> Космонавтлар, Минг Урик, Мустакиллик майдони'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'red'
        }));
}
