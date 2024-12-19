import React from 'react';

const RoomGuide2 = ({ roomGuide2 }) => {
    return (
        <div className="guide">
            <h3>객실 이용 안내</h3>
            {roomGuide2.map((item, index) => (
                <div key={index} className="list">
                    <h4>{item.title}</h4>
                    <div className="txt-wrap">
                        {item.description ? (
                            <ul className="txt">
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="txt">{item.text}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoomGuide2;