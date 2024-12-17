import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../common/Header";
import Footer from "../common/Footer";

import "../../scss/common.scss";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";

const Party = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="center">
          <div className="sub-title column">
            <div>
              <h2>웨딩 & 연회</h2>
              <p className="sub-desc">
                세심한 인테리어와 품격 높은 서비스를 제공하여 인생의 중요한 순간을 최고의 기억으로 만들어 드립니다.
              </p>
            </div>
            <ul className="location">
              <li><Link to="/">홈</Link></li>
              <li><Link to="#self">웨딩 & 연회</Link></li>
            </ul>
          </div>

          <div className="sub-list-wrap">
            <div className="sub-title pt-10 first bd-none">
              <div>
                <h2>웨딩</h2>
                <p className="sub-desc">
                  행복한 순간, 그 느낌을 오래 간직하게 해줄 기품있는 인테리어와 신랑 신부를 위한 세심한 배려로 영원한 미래를 약속하는 최고의 장소입니다.
                </p>
              </div>
            </div>
            <ul className="sub-list line-3">
              <li>
                <h3>대연회장</h3>
                <Link to="/wedding">
                  <div className="img-wrap">
                    <img src="../../img/sub/wd-1-01.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
              <li>
                <h3>영빈관</h3>
                <Link to="/wedding2">
                  <div className="img-wrap">
                    <img src="../../img/sub/wd-2-01.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
              <li>
                <h3>웨딩스타일</h3>
                <Link to="/wedding3">
                  <div className="img-wrap">
                    <img src="../../img/sub/wd-3-01.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
            </ul>

            <div className="sub-title first" id="company">
              <div>
                <h2>기업연회</h2>
                <p className="sub-desc">
                  2012 서울 핵안보정상회의 특별 만찬, G20 정상 배우자 만참, 88'서울 올림픽 IOC 총회, APEC, 남북 장관급 회담 등 주요 국제 행사를 대거 유치해 온 서울신라호텔은 성공적인 컨퍼런스를 진행하기 위해 첨단 시설과 품격높은 서비스를 제공하고 있습니다.
                </p>
              </div>
            </div>
            <ul className="sub-list line-3">
              <li>
                <h3>대연회장</h3>
                <Link to="/corporateParty">
                  <div className="img-wrap">
                    <img src="../../img/sub/gbRoom-1-01.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
              <li>
                <h3>영빈관</h3>
                <Link to="/corporateParty2">
                  <div className="img-wrap">
                    <img src="../../img/sub/gbRoom-2.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
              <li>
                <h3>중 &middot; 소형 연회장</h3>
                <Link to="/corporateParty3">
                  <div className="img-wrap">
                    <img src="../../img/sub/gbRoom-3.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
            </ul>

            <div className="sub-title first" id="family">
              <div>
                <h2>가족연회</h2>
                <p className="sub-desc">
                  품격높은 파티를 끊임없이 개최해오고 있는 서울신라호텔은 상상력이 돋보이는 아이디어와 고급스러운 진행으로 어떤 테마라도 완벽히 연출하여 드립니다.
                </p>
              </div>
            </div>
            <ul className="sub-list line-2">
              <li>
                <h3>가족연회장</h3>
                <Link to="/familyParty">
                  <div className="img-wrap">
                    <img src="../../img/sub/cbInfo-1-01.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
              <li>
                <h3>중 &middot; 소형 연회장</h3>
                <Link to="/familyParty2">
                  <div className="img-wrap">
                    <img src="../../img/sub/cbInfo-2-01.jpg" alt="" />
                  </div>
                  <p className="view-more">자세히보기</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Party;
