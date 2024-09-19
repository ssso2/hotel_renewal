$(function () {
    // 스페셜오퍼 상세페이지
    // 지금바로예약하기 하단에 붙이기

    $(window).on("scroll", function () {
        let scTop = window.scrollY;
        let dDayPosition = $(".d-day-wrap").offset().top;
        let dDayHeight = $(".d-day-wrap").outerHeight();

        // 
        if (scTop >= dDayPosition + dDayHeight - $(window).height()) {
            $(".d-day-wrap").addClass("on");
        }
        else{
            $(".d-day-wrap").removeClass("on");
        }

    });

    
});
