var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var cardLogo1 = document.getElementById("card-logo1");
var work1 = document.getElementById("work1");
var work2 = document.getElementById("work2");
var work3 = document.getElementById("work3");
var airConditionin1 = document.getElementById("air-conditionin1");
var airConditionin2 = document.getElementById("air-conditionin2");
var airConditionin3 = document.getElementById("air-conditionin3");
var airConditionin4 = document.getElementById("air-conditionin4");

icon.onclick = function () {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    logo.src = "img/logodark.png";
    cardLogo1.src = "img/1Layer1-dark.png";
    work1.src = "img/wrok1-dark.png";
    work2.src = "img/wrok2-dark.png";
    work3.src = "img/wrok3-dark.png";
    
    airConditionin1.src = "img/air-conditioning-gird1-footer-img-dark1.png";
    airConditionin2.src = "img/air-conditioning-gird1-footer-img-dark2.png";
    airConditionin3.src = "img/air-conditioning-gird1-footer-img-dark3.png";
    airConditionin4.src = "img/air-conditioning-gird1-footer-img-dark4.png";

  } else {
    logo.src = "img/pc-logo.png";
    cardLogo1.src = "img/1Layer1-light.png";
    work1.src = "img/wrok1.png";
    work2.src = "img/wrok2.png";
    work3.src = "img/wrok3.png";
    airConditionin1.src = "img/air-conditioning-gird1-footer-img-light1.png";
    airConditionin2.src = "img/air-conditioning-gird1-footer-img-light2.png";
    airConditionin3.src = "img/air-conditioning-gird1-footer-img-light3.png";
    airConditionin4.src = "img/air-conditioning-gird1-footer-img-light4.png";
  }
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 55,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    '0':{
      slidesPerView: 1,
      spaceBetween: 48,
    },
    '900':{
      slidesPerView: 2,
      spaceBetween: 55,
    },
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: false,
  keyboard: true,
});


var swiper2 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 55,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    '0':{
      slidesPerView: 1,
      spaceBetween: 48,
    },
    '600':{
      slidesPerView: 2,
      spaceBetween: 55,
    },
    '1280':{
      slidesPerView: 3,
      spaceBetween: 55,
    },

  },
  navigation: {
    nextEl: ".button-next1",
    prevEl: ".button-prev1",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: false,
  keyboard: true,
});

// Faq 

var faqs = document.querySelectorAll('.faq-body-questionAns');

faqs.forEach(faq =>{
  faq.addEventListener('click', ()=>{
     faq.classList.toggle('open');


      //chang icon
      const icon = faq.querySelector('span i');
      if (icon.className === 'bx bx-plus') {
          icon.className = 'bx bx-minus'
      }else{
          icon.className = 'bx bx-plus'
      }
  })
})
