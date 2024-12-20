import React from "react";

const BtnModal = ({propBtn}) => {
  return (
    <div>
      <div class="lypop" data-lyOpen="pop-benefit-guide">
        <div class="lypop-wp mid">
          <div class="lypop-content">
            <div class="lypop-title">
              <strong>혜택 및 이용 안내</strong>
              <a
                href="javascrip:void();"
                class="lypop-close"
                data-lyClose="pop-benefit-guide"
              >
                <span class="hide">닫기</span>
              </a>
            </div>
            <div class="lypop-ct scroll">
              <iframe src="../pop/sub03_01_01_pop.html" title="내용"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnModal;
