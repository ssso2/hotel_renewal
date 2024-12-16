import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
    return (
        <div>
            {/* <h2>{title}</h2> */}
            <ul className="location">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/wedding">웨딩 & 연회</Link></li>
                {/* <li><Link to="#self">{breadcrumb}</Link></li> */}
            </ul>
        </div>
    );
}

export default Breadcrumb;