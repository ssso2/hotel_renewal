// 3depth tab 공통
const depth3Tab = document.querySelector(".depth3-tab-wrap > .tab");
const tabs = document.querySelectorAll(".depth3-tab-wrap .tab > li");
const tabContents = document.querySelectorAll(".depth3-tab-wrap .tab-cont");

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click",function(){
        for(let j = 0; j < tabs.length; j++){
            console.log(j);
            tabs[j].classList.remove("on");
            tabContents[j].classList.remove("on");
        }
        tabs[i].classList.add("on");
        tabContents[i].classList.add("on");
    });
}

window.addEventListener("scroll",function(){
    // 스크롤바의 위치값
    let scTop = window.scrollY;
    let headerHeight = header.clientHeight;
    let depth3TabTop = depth3Tab.offsetTop;

    if(scTop > depth3TabTop){
        
        if(header.classList.contains("on")){
            depth3Tab.style.top = headerHeight + "px";
            depth3Tab.classList.add("on");
        }
        else{
            depth3Tab.style.top = 0;
            depth3Tab.classList.add("on");
        }
    }
    else{
        depth3Tab.classList.remove("on");
    }
});

