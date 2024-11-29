import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';

import "../../../scss/common.scss"
import "../../../scss/header.scss"
import "../../../scss/footer.scss"
import "../../../scss/sub-list.scss"
import "../../../scss/sub-detail.scss"

const Gallery = ({ propImages }) => {
    return (
        <div className="gallery">
            <div style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}} className="swiper mySwiper2">
                <div className="swiper-wrapper">
                    {propImages.map((img, index) => (
                        <div className="swiper-slide" key={index}>
                            <img src = {img} alt={`gallery-img-${index}`} />
                        </div>
                    ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
            <div thumbsSlider="" className="swiper mySwiper">
                <div className="swiper-wrapper">
                    {propImages.map((img, index) => (
                        <div className="swiper-slide" key={index}>
                            <img src={img} alt={`gallery-img-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Introduction = () => {
    return (
        <>
            <div className="Introduction">
                <h3>프라이빗하고 여유로운 휴식과 함께 낭만적인 시간을 만들어드립니다.</h3>
                <p className="txt">
                    어번 아일랜드(Urban Island)에서 더욱 여유로운 시간을 즐길 수 있는 다양한 스타일의 카바나를 제안합니다.<br/>
                    소중한 사람들과 함께하는 여유로운 휴식, 그리고 낭만적인 순간을 경험해 보십시오.
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
                <div className="btn-wrap btn-250">
                    <button type="button" className="btn btn-01" data-lybtn="pop-map">Cabana Map</button>
                </div>
            </div>
        </>
    )
}
const InfoTable = ({propData}) => {

    return(
        <div className="info-wrap">
            <div className="schedule">
                <p className="tit">Cabana 이용 안내</p>
                <div className="table">
                    <table className="col-6">
                        <caption>Cabana 이용 안내</caption>
                        <colgroup>
                            {propData.headers.map((data, index)=> (
                                <col />
                            ))}
                        </colgroup>
                        <thead>
                            <tr>
                                {propData.headers.map((head, index)=> (
                                    <th scope="col">{head}</th>
                                ))} 
                            </tr>
                        </thead>
                        <tbody> {/* 어렵 */}
                            {propData.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <th scope="row">{row.구분}</th>
                                    {row.data.map((item, colIndex) => (
                                        <td key={colIndex}>{item}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <th scope="row">혜택</th>
                                <td colSpan={propData.headers.length - 1} dangerouslySetInnerHTML={{ __html: propData.혜택 }} />
                            </tr>
                        </tbody>
                    </table>

                </div>
                <p className="desc">카바나 요금 외 입장료는 별도 부과됩니다. (시즌별 입장료 상이)</p>
            </div>
        </div>
    )
}

const InfoRule = () => {

    return (
        <div className="info-wrap mt-0">
            <div className="desc-wrap">
                <p className="desc">
                    어번 아일랜드 카바나 이용 안내
                </p>
                <ul className="rule">
                    <li>카바나는 별도의 객실 이용 없이 예약하실 수 있습니다.</li>
                    <li>피트니스 클럽 회원 외 동반객은 별도 입장료가 발생되며, 반드시 회원 동반 시에 이용 가능합니다.</li>
                    <li>카바나 이용 고객에 한하여 이용 당일 객실 체크인 전 어번 아일랜드 입장 가능합니다.</li>
                    <li>카바나 이용 시 제공되는 식음 혜택의 구성은 호텔 사정에 따라 변경될 수 있습니다.</li>
                    <li>카바나를 포함한 어번 아일랜드의 모든 지역에서는 외부 식음료의 반입을 금지하고 있습니다.</li>
                    <li>카바나(F1~F6)를 이용하실 경우 전용 플런지 풀(Plunge Pool)을 이용하실 수 있습니다.</li>
                    <li>예약 접수 시작일은 '1개월 전 1일'이며 8시 30분부터 예약 전화 가능합니다.</li>
                    <li>이용 예정일 2일 전까지는 위약금 없이 예약 취dd소 및 변경 가능합니다. 이후 예약 취소 및 변경, 노쇼(No-show) 발생 시 위약금이 부과됩니다.</li>
                </ul>
            </div>
        </div>
    )
    
}

function Cabana() {

    const galleryImages = [
        "../../img/sub/cabana-01.jpg",
        "../../img/sub/cabana-02.jpg",
        "../../img/sub/cabana-03.jpg",
        "../../img/sub/cabana-04.jpg",
        "../../img/sub/cabana-05.jpg",
        "../../img/sub/cabana-06.jpg"
    ];

    const tableData = {
        headers: ["구분", "F1 ~ F2", "F3 ~ F6", "Gathering", "K1 ~ K4"],
        rows: [
            { 구분: "9/1 ~9/30", data: ["1,080,000원", "930,000원", "1,080,000원", "570,000원"] },
            { 구분: "10/1~10/31", data: ["790,000원", "650,000원", "990,000원", "500,000원"] },
        ],
        혜택: "- 식음료 기본세트 포함<br/>- 어번 아일랜드 운영 시간 동안 이용 가능",
    };

    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <ul className="tab">
                    <li className="tab1"><Link to="/urbanIsland">어번 아일랜드</Link></li>
                    <li className="tab2 on"><Link to="/cabana">카바나</Link></li>
                    </ul>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <div className="sub-title">
                                <h2>카바나</h2>
                                <ul className="location">
                                    <li><Link to="/">홈</Link></li>
                                    <li><Link to="../sub/sub04.html">라이프스타일</Link></li>
                                    <li><Link to="#self">어번 아일랜드</Link></li>
                                </ul>
                            </div>
                            <Gallery propImages={galleryImages} />

                            <div className="context">
                                <Introduction />
                                <InfoTable propData={tableData} />
                                <InfoRule />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )   
}

export default Cabana;