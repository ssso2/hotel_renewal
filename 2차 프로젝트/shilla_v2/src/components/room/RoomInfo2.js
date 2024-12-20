import React from 'react';

const ListItem = ({ title, description }) => (
    <li className="list">
        <h4>{title}</h4>
        <p className="txt">{ description }</p>
    </li>
);

const RoomInfo2 = ({ roomInfo2 }) => {
    return (
        <ul className="info">
            <h3>상세 운영 시간</h3>
            {
                roomInfo2.map((item, index) => (
                    <ListItem
                        key={ index }
                        title={ item.title }
                        description={ item.description }
                    />
                ))
            }
        </ul>
    );
}

export default RoomInfo2;