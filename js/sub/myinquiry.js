$(function () {
    $('.inquiry-title').on('click', function () {
        if (!$('.inquiry-content').hasClass('on')) {
            $('.inquiry-content').parents().siblings().find('.inquiry-content').removeClass('on');
            $(this).siblings('.inquiry-content').addClass('on');
            // } else {
            //     $(this).removeClass('on');
            // }
        }
    });

    // for (let i = 0; i < $('.inquiry-title').length; i++) {
    //     $('.inquiry-title')[i].on('click', function () {
    //         for (let j = 0; j < $('.inquiry-title').length; j++) {
    //             $('.inquiry-content')[j].removeClass('on');
    //         }

    //         if (!$('.inquiry-content').hasClass('on')) {
    //             $('.inquiry-content')[i].addClass('on');
    //         } else {
    //             $('.inquiry-content')[i].siblings().removeClass('on');
    //         }
    //     });
    // }
});
