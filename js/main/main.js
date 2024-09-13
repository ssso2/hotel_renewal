AOS.init();

// 스와이퍼 API 슬라이드
var mainSwiper = new Swiper(".cont1 .swiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


//비디오 재생버튼
// const vidPlay = document.querySelector(".play");
// const vidPause = document.querySelector(".pause");
// const vidView = document.querySelector(".video_review");

// vidPlay.addEventListener("click",function(){

//     vidPlay.classList.add("hide");
//     vidPause.classList.remove("hide");
//     vidView.querySelector("video").play();
    
// });
// vidPause.addEventListener("click",function(){

//     vidPause.classList.add("hide");
//     vidPlay.classList.remove("hide");
//     vidView.querySelector("video").pause();
    
// });
// vidView.addEventListener("mouseenter",function(){
//     vidPlay.style.opacity = 1;
//     vidPause.style.opacity = 1;
// });
// vidView.addEventListener("mouseleave",function(){
//     vidPlay.style.opacity = 0;
//     vidPause.style.opacity = 0;
// });