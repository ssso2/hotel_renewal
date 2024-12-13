import React from 'react';

const Popup = ({ id, title, imgSrc }) => {
    return (
        <div className="lypop" data-lyOpen={id}>
            <div className="lypop-wp">
                <div className="lypop-content">
                    <div className="lypop-title">
                        <strong>{title}</strong>
                        <a href="javascript:void(0);" className="lypop-close" data-lyclose={id}>
                            <span className="hide">닫기</span>
                        </a>
                    </div>
                    <div className="lypop-ct">
                        <div className="img-wrap">
                            <img src={imgSrc} alt={title} />
                        </div>
                        <div className="btn-wrap type5">
                            <button className="btn btn-04" data-lyclose={id}>
                                <span>닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
