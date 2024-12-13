const MapPopUp = ( {propImage, propBtn} ) => {

    return (
        <div class="lypop" data-lyOpen="pop-map">
            <div class="lypop-wp mid">
                <div class="lypop-content">
                    <div class="lypop-title">
                        <strong>{propBtn}</strong>
                        <a href="javascrip:void();" class="lypop-close" data-lyclose="pop-map"><span class="hide">닫기</span></a>
                    </div>
                    <div class="lypop-ct">
                        <div class="img-wrap">
                            <img src={propImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default MapPopUp;
