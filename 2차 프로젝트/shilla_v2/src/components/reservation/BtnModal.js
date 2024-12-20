import React from "react";

const BtnModal = ({dataTitle}) => {
  return (
    <div className="lypop" data-lyOpen={dataTitle}>
    <div className="lypop-wp mid">
        <div className="lypop-content">
            <div className="lypop-title">
                <strong>혜택 및 이용 안내</strong>
                <a href="javascrip:void();" className="lypop-close" data-lyClose={dataTitle} ><span className="hide">닫기</span></a>
            </div>
            <div className="lypop-ct scroll">
                <iframe src="/reserve/pop" title="내용"></iframe>
            </div>
        </div>
    </div>
</div>
  );
};

export default BtnModal;
