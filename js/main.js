const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  },
});


const swiper = new Swiper('.swiper1', {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,

    breakpoints:{
      1200: {
        slidesPerView:4,
        spaceBetween:50,
      },
      990: {
        slidesPerView:3,
        spaceBetween:50,
      },
      680: {
        slidesPerView:2,
        spaceBetween:30,
      },
      320: {
        slidesPerView:1,
        spaceBetween:0,
      },
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1700,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 500,
    },
  });

 
// Clicking on links with closure Burger menu

let menuEl = document.querySelectorAll('.header__nav-list');
function closeHamburger() {
  let checkItem = document.getElementById('menu__toggle');
  checkItem.checked = false;
  }
for(menuEl of menuEl){
  menuEl.addEventListener('click', function(){
    closeHamburger();
  })
}

//Popup container 

(function(){
  let button = document.querySelector('.header__nav-btn');
  let popup = document.querySelector('.header__popup');
  let closePopup = document.querySelector('.header__close');
  let modal = document.querySelector('.header__pop-modal');
  let body = document.getElementsByTagName('body');
  document.querySelectorAll('.btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(){
      document.body.classList.add('disable-scroll');
      popup.classList.add('show__popup');
      popup.classList.add('fade');
      popup.classList.add('animate-open');
      modal.classList.add('is-open');
    });
  });
 

  closePopup.addEventListener('click', function(){
    popup.classList.remove('show__popup');
    popup.classList.remove('fade');
    popup.classList.remove('animate-open');
    modal.classList.remove('is-open');
    document.body.classList.remove('disable-scroll');
  })

})();


//yandex map

// ymaps.ready(init);
// var myMap, myGeoObject, myRectangle;

// function init () {
//     myMap = new ymaps.Map('map', {
//         center: [55.674, 37.601],
//         zoom: 11
//     }, {
//         searchControlProvider: 'yandex#search'
//     });

//     // Cоздаем геообъект с типом геометрии "прямоугольник".
//     myGeoObject = new ymaps.GeoObject({
//         // Геометрия = тип геометрии + координаты геообъекта.
//         geometry: {
//             // Тип геометрии - прямоугольник.
//             type: 'Rectangle',
//             // Координаты.
//             coordinates: [
//                 [55.665, 37.66],
//                 [55.64, 37.53]
//             ]
//         },
//         // Свойства.
//         properties: {
//             hintContent: 'Перетащи меня!',
//             balloonContent: 'Прямоугольник 2'
//         }
//     }, {
//         // Опции.
//         // Объект можно перетаскивать.
//         draggable: true,
//         // Цвет и прозрачность заливки.
//         fillColor: '#ffff0022',
//         // Цвет и прозрачность границ.
//         strokeColor: '#3caa3c88',
//         // Ширина линии.
//         strokeWidth: 7
//     });

//     // Создаем прямоугольник с помощью вспомогательного класса.
//     myRectangle = new ymaps.Rectangle([
//         // Задаем координаты диагональных углов прямоугольника.
//         [55.66, 37.60],
//         [55.71, 37.69]
//     ], {
//         //Свойства
//         hintContent: 'Меня перетаскивать нельзя!',
//         balloonContent: 'Прямоугольник 1'
//     }, {
//         // Опции.
//         // Цвет и прозрачность заливки.
//         fillColor: '#7df9ff33',
//         // Дополнительная прозрачность заливки..
//         // Итоговая прозрачность будет не #33(0.2), а 0.1(0.2*0.5).
//         fillOpacity: 0.5,
//         // Цвет обводки.
//         strokeColor: '#0000FF',
//         // Прозрачность обводки.
//         strokeOpacity: 0.5,
//         // Ширина линии.
//         strokeWidth: 2,
//         // Радиус скругления углов.
//         // Данная опция принимается только прямоугольником.
//         borderRadius: 6
//     });

//     myMap.geoObjects
//         .add(myRectangle)
//         .add(myGeoObject);
// }



ymaps.ready(init);

var myMap;

function init () {
    // Инициализация вкладок.
    // После исполнения команды tabs() tab-2 получит style='display:none'.
    // Карта будет инициализирована, но будет иметь нулевой размер.
    // В данном случае это хорошо, так как невидимая карта не будет загружать невидимые тайлы.
    $('#tabs').tabs();
    myMap = new ymaps.Map('tab-2', {
        center: [56.012229, 37.195346], // Москва
        zoom: 10
    });

    // В момент показа новой вкладки будем пересчитывать размер карты.
    // Карта примет максимально возможные значения при активации ее таба
    // и нулевые, как только будет выбран первый таб.
    // Подписываемся на событие 'tabsshow' (а не 'tabselect',
    // так как требуется, чтобы элемент с картой уже был виден).
    $('#tabs').bind('tabsshow', function (event, ui) {
        myMap.container.fitToViewport();
    });
}


  