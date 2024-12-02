import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const FloatingMenu = () => {

    useEffect(()=>{
        $(function () {
            // 레이어 팝업
            $(".lypop_close").on("click", function () {
                $(".lypop").hide();
            });
        
            $("[data-lybtn]").each(function () {
                var lypop = $(this).attr("data-lybtn");
                $(this).click(function () {
                    $(".lypop").hide();
                    $("[data-lyOpen =" + lypop + "]")
                        .show()
                        .focus();
                });
                $("[data-lyClose]").click(function () {
                    var lypopClose = $(this).attr("data-lyClose");
                    $("[data-lyOpen =" + lypop + "]").hide();
                    $("[data-lybtn =" + lypopClose + "]").focus();
                });
            });

        });
    })
    return (
        <article className="floating-menu">
            <div className="menu">
                <Link to="../../html/sub/reservation.html" className="circle-btn" title="예약 페이지로 이동">예약</Link>
                <Link to="../../html/sub/sub06_03.html" className="circle-btn" title="고객문의 게시판으로 이동">문의</Link>
            </div>
            <Link to="#" className="top-btn" title="최상단으로 이동">TOP</Link>
        </article>
    );
};

export default FloatingMenu;
