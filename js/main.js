// import JustValidate from '../node_modules/just-validate/dist/just-validate.es.js'


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

let user = document.getElementById('#name');
let phoneNum = document.getElementById('#phone');
let email = document.getElementById('#email');
let form = document.getElementById('#form');


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
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 5000,
    },

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
      type: 'bullets',
      clickable: 'false',
      totalClass: 'swiper-pagination-total',
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
   
  });

  //accordion

  let accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
  let targ = event.target;
  if (targ.tagName !== 'H3') return;
  if (targ.classList.contains('select__list')) {
    hideAll();
  } else {
    hideAll();
    targ.classList.add('select__list');
    showText(targ.nextElementSibling);
  }
}
function hideAll() {
  let h3El = accordion.querySelectorAll('h3');
  let divEl = accordion.querySelectorAll('div');
  for (let i = 0; i < h3El.length; i++) {
    h3El[i].classList.remove('select__list');
  }
  for (let i = 0; i < divEl.length; i++) {
    divEl[i].style.height = '0';
  }
}
function showText(textEl) {
  textEl.style.height = textEl.scrollHeight + 'px';
}

//   VALIDATION

//   const validation = new JustValidate(
//     '#form',
//     {
//       errorFieldCssClass: 'is-invalid',
//       errorFieldStyle: {
//         border: '1px solid red',
//       },
//       errorLabelCssClass: 'is-label-invalid',
//       errorLabelStyle: {
//         color: 'red',
//         textDecoration: 'underlined',
//       },
//       focusInvalidField: true,
//       lockForm: true,
//       tooltip: {
//         position: 'top',
//       },
//       errorsContainer: '.errors-container',
//     },
//     [
//       {
//         key: 'Name is too short',
//         dict: {
//           ru: 'Имя слишком короткое',
//           es: 'El nombre es muy corto',
//         },
//       },
//       {
//         key: 'Field is required',
//         dict: {
//           ru: 'Обязательное поле',
//           es: 'Se requiere campo',
//         },
//       },
//     ]
//   );

//   validation
//   .addField('#name', [
//     {
//       rule: 'required'
//     },
//     {
//       rule: 'minLength',
//       value: 3,
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//   ])
//   .addField('#email', [
//     {
//       rule: 'required',
//       errorMessage: 'Email is required',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Email is invalid!',
//     },
//   ])
//   .addField('#flexCheckDefault', [
//     {
//       rule: 'required',
//     },
//   ])

   
//   .onSuccess((event)=>{
//  
//  })
   
  

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