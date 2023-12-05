'use strict'
const courseBox = document.querySelector(".course-box");
const slideBox = document.querySelectorAll(".course-box-box");
const leftbtn = document.getElementById("leftbtn")
const rightbtn = document.getElementById("rightbtn")
// console.log(slideBox);
let count = 0;
slideBox.forEach((slide, i) => {
  let val = `(slide.style.left = ${i * 101}%)`;
  console.log(val);
});
const goPrev = () => {
  count--;
  console.log("yes");
  slideShow();
  console.log(count)
  if(count == 6){
    rightbtn.style.opacity = 0.5;
    
  }
  else{
    rightbtn.style.opacity = 1;
  }
  if(count == 0){
    leftbtn.style.display = "none"
  }
  if(count==5){
    rightbtn.style.display = "block"
  }
};
const goNext = () => {
  count++;
  console.log("yes");
  slideShow();
console.log(count)
if(count == 6){
  rightbtn.style.display = "none"
  leftbtn.style.opacity =1;
}
else{
  rightbtn.style.opacity = 1;
  
}
if(count==1){
  leftbtn.style.display = "block"
}
};
const slideShow = () => {
  // console.log("yay");
  slideBox.forEach((slide) => {
    count = count === slideBox.length ? 0 : count < 0 ? slideBox.length - 1 : count;
    slide.style.transform = `translateX(-${count * 101}%)`;
  });
};


//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay:{
    delay:2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//zindex

// const about = document.querySelector(".about");


// 