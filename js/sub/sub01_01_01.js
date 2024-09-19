$(function () {
    // 스페셜오퍼 상세페이지
    // 지금바로예약하기 하단에 붙이기
    let scTop = 0;
    let dDayPosition = $(".d-day-wrap").offset().top;
    let dDayHeight = $(".d-day-wrap").outerHeight();
    $(window).on("scroll", function () {
        scTop = window.scrollY;
        if (scTop >= dDayPosition + dDayHeight) {
            $(".d-day-wrap").addClass("on");
        }
    });

    // console.log(dDayPosition + dDayHeight);
});
