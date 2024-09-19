$(function () {
    // 스페셜오퍼 상세페이지
    // 지금바로예약하기 하단에 붙이기

    $(window).on("scroll", function () {
        let scTop = window.scrollY;
        let dDayPosition = $(".d-day-wrap").offset().top;
        let dDayHeight = $(".d-day-wrap").outerHeight();
        let scrollY = dDayPosition + dDayHeight - $(window).height();

        // 
        if (scTop > scrollY) {
            $(".d-day-wrap").addClass("on");
        }
        else if(scTop <= 1260){
            $(".d-day-wrap").removeClass("on");
        }


        console.log("scTop : ",scTop);
        console.log("scrollY : ",scrollY);
        

    });

});




