import React, { useState } from 'react'

const MainCont5Popup = () => {
    const hotelListPopUp = [
        {
            divClass : 'country',
            h4Text : '국내',
            area : [
                {
                    h5Text : '서울 강북', 
                    list : [
                        {
                            hotelLink : "/",
                            target : '',
                            title : '',
                            text : '서울 신라호텔'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/gwanghwamun/index.do",
                            target : '_blank',
                            title : '신라스테이 광화문 새창 열기',
                            text : '신라스테이 광화문'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/mapo/index.do",
                            target : '_blank',
                            title : '신라스테이 마포 새창 열기',
                            text : '신라스테이 마포'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/seodaemun/index.do",
                            target : '_blank',
                            title : '신라스테이 서대문 새창 열기',
                            text : '신라스테이 서대문'
                        },
                    ]
                },
                {
                    h5Text : '서울 강남', 
                    list : [
                        {
                            hotelLink : "https://www.shillastay.com/yeoksam/index.do",
                            target : '_blank',
                            title : "신라스테이 역삼 새창 열기",
                            text : '신라스테이 역삼'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/seocho/index.do",
                            target : '_blank',
                            title : '신라스테이 서초 새창 열기',
                            text : '신라스테이 서초'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/guro/index.do",
                            target : '_blank',
                            title : '신라스테이 구로 새창 열기',
                            text : '신라스테이 구로'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/samsung/index.do",
                            target : '_blank',
                            title : '신라스테이 삼성 새창 열기',
                            text : '신라스테이 삼성'
                        },
                    ]
                },
                {
                    h5Text : '전국', 
                    list : [
                        {
                            hotelLink : "https://www.shilla.net/jeju/index.do?lang=ko",
                            target : '_blank',
                            title : "제주 신라호텔 새창 열기",
                            text : '제주 신라호텔'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/dongtan/index.do",
                            target : '_blank',
                            title : '신라스테이 동탄 새창 열기',
                            text : '신라스테이 동탄'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/cheonan/index.do",
                            target : '_blank',
                            title : '신라스테이 천안 새창 열기',
                            text : '신라스테이 천안'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/jeonju/mic/viewMicro.do?contId=PC",
                            target : '_blank',
                            title : '신라스테이 전주 새창 열기',
                            text : '신라스테이 전주'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/ulsan/index.do",
                            target : '_blank',
                            title : '신라스테이 울산 새창 열기',
                            text : '신라스테이 울산'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/haeundae/index.do",
                            target : '_blank',
                            title : '신라스테이 해운대 새창 열기',
                            text : '신라스테이 해운대'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/seobusan/index.do",
                            target : '_blank',
                            title : '신라스테이 서부산 새창 열기',
                            text : '신라스테이 서부산'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/yeosu/index.do",
                            target : '_blank',
                            title : '신라스테이 여수 새창 열기',
                            text : '신라스테이 여수'
                        },
                        {
                            hotelLink : 'https://www.shillastay.com/jeju/index.do',
                            target : '_blank',
                            title : '신라스테이 제주 새창 열기',
                            text : '신라스테이 제주'
                        },
                        {
                            hotelLink : "https://www.shillastay.com/ihotewoo/index.do",
                            target : '_blank',
                            title : '신라스테이 플러스 이호테우 새창 열기',
                            text : '신라스테이 플러스 이호테우'
                        },
                    ]
                },

            ]
        },
        {
            divClass : 'country foreign',
            h4Text : '해외', 
            area : [
                {
                    h5Text : '베트남', 
                    list : [
                        {
                            hotelLink : "https://www.shillamonogram.com/dnmg/index.do",
                            target : '_blank',
                            title : '신라모노그램 다낭 새창 열기',
                            text : '신라모노그램 다낭'
                        }
                    ]
                }
            ]
        }
    ]

    let [hotelList,hotelListSet] = useState(hotelListPopUp)
    return (
        // <!-- 지점 찾기 팝업 -->
        <div class="lypop hotel-list" data-lyOpen="pop-hotel-box">
            <div class="lypop-wp big">
                <div class="lypop-content">
                    <div class="lypop-title">
                        <strong>호텔 찾기</strong>
                        <a href="javascrip:void();" class="lypop-close" data-lyclose="pop-hotel-box">
                            <span class="hide">닫기</span>
                        </a>
                    </div>
                    <div class="lypop-ct">
                        <div class="hotel-box-wrap">
                            {
                                hotelList.map((item,index)=>{
                                    return  <div class={item.divClass} key={index}>
                                                <h4>{item.h4Text}</h4>
                                                <div class="area-wrap">
                                                    {
                                                        item.area.map((area,idx)=>{
                                                            return  <div class="area " key={idx}>
                                                                        <h5>{area.h5Text}</h5>
                                                                        <div class="hotel-link-wrap">
                                                                            {
                                                                                area.list.map((list,i)=>{
                                                                                    return <a key={i} href={list.hotelLink} target={list.target} title={list.title}>{list.text}</a>
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                        <div class="btn-wrap type5">
                            <button class="btn btn-04" data-lyclose="pop-hotel-box"><span>닫기</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCont5Popup
