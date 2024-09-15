AOS.init();


// 메인페이지 Header
const mainHeader = document.querySelector(".main-header header");
const gnb = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnbbg");
const gnb1Depth = document.querySelectorAll(".gnb > li");
const mainCont1 = document.querySelector("main > .cont1");


gnb.addEventListener("mouseover",function(){
    gnbBg.classList.add("on");
});
gnb.addEventListener("mouseleave",function(){
    gnbBg.classList.remove("on");
});
for(let i = 0; i < gnb1Depth.length; i++){
    gnb1Depth[i].addEventListener("mouseleave",function(){
        gnb1Depth[i].classList.remove("on");
    });
    gnb1Depth[i].addEventListener("mouseover",function(){
        gnb1Depth[i].classList.add("on");
    });
}


// 과거의 스크롤바 위치값
let lastScrollTop = 0;
// 스크롤바의 위치값
let scTop = 0;
// 메인 비주얼 높이값
let mainCont1Height = 0;

window.addEventListener("scroll",function(){

    scTop = window.scrollY;
    mainCont1Height = mainCont1.offsetHeight-300;
    

    //스크롤바 내리면 헤더는 사라지고 스크롤바 올리면 헤더 나타남
    if(scTop == 0){
        mainHeader.classList.add("active");
    }
    else if(scTop > lastScrollTop) {
        mainHeader.classList.remove("active");
    }
    else if(scTop > mainCont1Height && scTop < lastScrollTop){
        mainHeader.classList.add("active");
        mainHeader.classList.add("on");
    }
    else if(scTop < mainCont1Height && scTop < lastScrollTop){
        mainHeader.classList.remove("on");
        mainHeader.classList.add("active");
    }

    lastScrollTop = scTop;
});

mainHeader.addEventListener("mouseover",function(){
    if(scTop < mainCont1Height){
        mainHeader.classList.add("on");
    }
    
});
mainHeader.addEventListener("mouseleave",function(){
    if(scTop < mainCont1Height){
        mainHeader.classList.remove("on");
    }
});


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
