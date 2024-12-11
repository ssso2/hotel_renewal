import React from 'react';

const Dynasty = ({ data }) => {
    return (
        <>
            {data.map((info, index) => (
                <div className="info-wrap" key={index}>
                    <strong>{info.title}</strong>
                    <ul className="info">
                        <li className="list">
                            <h4>위치</h4>
                            <p className="txt">{info.location}</p>
                        </li>
                        <li className="list">
                            <h4>면적</h4>
                            <p className="txt">{info.area}</p>
                        </li>
                        <li className="list">
                            <h4>Size</h4>
                            <p className="txt">{info.size}</p>
                        </li>
                        <li className="list">
                            <h4>수용인원</h4>
                            <ul className="flex">
                                {info.capacity.map((item, idx) => (
                                    <li key={idx}>
                                        <img src={item.icon} alt="" />
                                        <p>{item.type}<br/>{item.number}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Dynasty;