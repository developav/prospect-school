import JustValidate from '../node_modules/just-validate/dist/just-validate.es.js'


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

const swiper = new Swiper('.swiper', {
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

// Validation and send messages to server email

       document.addEventListener('DOMContentLoaded', function(){
        const form = document.getElementById('form1');
        form.addEventListener('submit', formSend);

        async function formSend(e) {
          e.preventDefault();
          
          let error = formValidate(form);
    
          let formData = new FormData(form);
        
    
          if (error === 0) {
              form.classList.add('_sending'); 
              let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
              });
              if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
              } else {
                alert("Ошибка");
                form.classList.remove('_sending');
              }
            } 
            else {
            
            }
          }

        function formValidate(form) {
          let error = 0;
          let formReq = document.querySelectorAll('._req');

          for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
              if(emailTest(input)){
                formAddError(input);
                error++;
              }
            } else {
              if(input.value === '') {
                formAddError(input);
                error++;
              }
            }

          }
          return error;
        }
        function formAddError(input) {
          input.parentElement.classList.add('_error');
          input.classList.add('_error');
        }
        function formRemoveError(input) {
          input.parentElement.classList.remove('_error');
          input.classList.remove('_error');
        }
        function emailTest(input) {
          return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
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