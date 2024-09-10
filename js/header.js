const header = document.querySelector("header");
const gnb = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnbbg");
const gnb1Depth = document.querySelectorAll(".gnb > li");

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

window.addEventListener("scroll",function(){
    // 스크롤바의 위치값
    let scTop = window.scrollY;

    //스크롤바 내리면 헤더는 사라지고 스크롤바 올리면 헤더 나타남
    if(scTop == 0){
        header.classList.add("on");
    }
    if(scTop > lastScrollTop) {
        header.classList.remove("on");
    }
    else{
        header.classList.add("on");
    }
    lastScrollTop = scTop;
});
