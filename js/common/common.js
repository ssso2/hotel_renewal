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


// 3depth 탭이 화면 위로 붙음
// window.addEventListener("scroll",function(){
//     // 스크롤바의 위치값
//     let scTop = window.scrollY;
//     let headerHeight = header.clientHeight;
//     let depth3TabTop = depth3Tab.offsetTop;

//     if(scTop > depth3TabTop){
        
//         if(header.classList.contains("on")){
//             depth3Tab.style.top = headerHeight + "px";
//             depth3Tab.classList.add("on");
//         }
//         else{
//             depth3Tab.style.top = 0;
//             depth3Tab.classList.add("on");
//         }
//     }
//     else{
//         depth3Tab.classList.remove("on");
//     }
// });



// DEPTH3 스와이퍼 슬라이드 갤러리
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});



$(function () {

    // 레이어 팝업
    $('.lypop_close').on('click', function () {
        $('.lypop').hide();
    });

    $('[data-lybtn]').each(function() {
        var lypop = $(this).attr('data-lybtn'); 
        $(this).click(function(){            
            $('.lypop').hide();
            $('[data-lyOpen ='+lypop+']').show().focus();
        });   
        $('[data-lyClose]').click(function(){
            var lypopClose = $(this).attr('data-lyClose'); 
            $('[data-lyOpen ='+lypop+']').hide();
            $('[data-lybtn ='+lypopClose+']').focus();
        });
    });


    // daterangepicker
    $('input[name="daterange"]').daterangepicker({
            "minYear":1000,
            "maxYear": 9999,
            "locale":{"format":'YYYY.MM.DD', 
                "separator":" ~ ",
                "applyLabel":"확인",
                "cancelLabel": "취소",
                "fromLabel":"From",
                "toLabel":"To",
                "customRangeLabel":"Custom",
                "weekLabel": "주",
                "daysOfWeek":["일","월","화","수","목","금","토"],
                "monthNames":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
                "firstDay":1
            },
            drops:"up" // up, down, auto 중 선택
        },function(start,end,label){
            console.log('New date range selected:'+start.format('YYYY.MM.DD') + ' ~ ' + end.format('YYYY.MM.DD')+'(predefined range:'+label+')');
    });

}); 



