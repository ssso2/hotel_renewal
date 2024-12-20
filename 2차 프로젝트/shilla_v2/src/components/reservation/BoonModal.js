import React from "react";
// import '../../scss/boonModal.scss'

const BoonModal = () => {
 
  return (
    <div className="container mt-0">
      <div className="center">
        <div className="depth3-tab-wrap pt-0">
          <div className="tab-contents">
            <div className="tab-cont cont1 on">
              <div className="sub-title">
                <h2>어번 아일랜드</h2>
              </div>
              <div className="gallery">
                <div
                  className="swiper mySwiper2"
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                >
                  <div className="swiper-wrapper">
                    {["urban-01.jpg", "urban-02.jpg", "urban-03.jpg", "urban-04.jpg"].map((img, index) => (
                      <div className="swiper-slide" key={index}>
                        <img src={`../../img/sub/${img}`} alt={`어번 아일랜드 이미지 ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
                <div thumbsSlider="" className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    {["urban-01.jpg", "urban-02.jpg", "urban-03.jpg", "urban-04.jpg"].map((img, index) => (
                      <div className="swiper-slide" key={index}>
                        <img src={`../../img/sub/${img}`} alt={`어번 아일랜드 썸네일 ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="context">
                <div className="Introduction">
                  <h3>격이 다른 아웃도어 라이프스타일 경험을 제공하는 어번 아일랜드</h3>
                  <p className="txt">
                    어번 아일랜드(Urban Island)는 '도심 속 휴식의 섬' 컨셉의 야외 수영장입니다.
                    <br />
                    서울 특급호텔 최초 온수풀, 자쿠지, 루프탑(Rooftop), 카바나 등 차원이 다른 아웃도어 라이프 스타일을 즐기실 수 있습니다.
                    <br />
                    어번 아일랜드는 계절마다 색다른 테마로 방문하실 때마다 새로운 경험을 제공합니다.
                  </p>
                  <div className="tel">
                    <span>문의전화</span>
                    <p>02-2230-3528~9</p>
                  </div>
                </div>
                <div className="info-wrap mt-0">
                  <ul className="info flex">
                    <li className="list">
                      <h4>위치</h4>
                      <p className="txt">서울신라호텔 3층</p>
                    </li>
                  </ul>
                  <div className="desc-wrap">
                    <p className="desc">
                      고객 여러분의 안전을 위하여 다음과 같이 어번 아일랜드(야외 수영장) 이용 규정을 준수해 주시기 바랍니다.
                    </p>
                    <p className="sub-tit">[운영방침]</p>
                    <ul className="rule">
                      <li>어번 아일랜드는 신라 피트니스 클럽 회원과 어번 아일랜드 이용 혜택이 포함된 투숙객 전용 시설입니다.</li>
                      <li>
                        어번 아일랜드 입장 혜택이 포함된 상품 외에는 이용 시 입장료가 추가로 부과됩니다.
                        <br />
                        단, 주말, 공휴일 및 성수기에는 수용 인원 마감에 따라 현장 유료 이용이 제한될 수 있습니다.
                      </li>
                      <li>어번 아일랜드는 사전 예약이 불가합니다.<br />(단, 카바나는 사전 예약 가능하며 02-2230-3528~9로 문의주시기 바랍니다.)</li>
                    </ul>
                  </div>
                </div>
                <div className="info-wrap flex min-h-none">
                  {[
                    { title: "야외 수영장", img: "R00000009H4E_KR.jpg", desc: "에메랄드 빛 야외 풀에서 최상의 휴식을 경험하실 수 있습니다." },
                    { title: "카바나", img: "R0000001CESG_KR.jpg", desc: "어번 아일랜드 카바나가 최고의 휴식 공간을 제공합니다." },
                    { title: "자쿠지", img: "R00000009H4S_KR.jpg", desc: "이국적인 분위기의 야외 자쿠지에서는 평온한 시간을 즐길 수 있습니다." },
                    { title: "루프탑", img: "R00000009H4Z_KR.jpg", desc: "남산의 정취를 느낄 수 있는 야외 루프탑 공간." },
                  ].map((card, index) => (
                    <div className="card" key={index}>
                      <strong>{card.title}</strong>
                      <div className="img-wrap">
                        <img src={`../../img/sub/${card.img}`} alt={card.title} />
                      </div>
                      <div className="txt-wrap">
                        <p className="sub">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoonModal;
