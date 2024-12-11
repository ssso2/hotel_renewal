import { Link, useLocation } from 'react-router-dom';

const Tab2 = () => {
    const location = useLocation();

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/CorporateParty1' ? 'on' : ''}`}>
                <Link to="/CorporateParty1">대연회장</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/CorporateParty2' ? 'on' : ''}`}>
                <Link to="/CorporateParty2">영빈관</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/CorporateParty3' ? 'on' : ''}`}>
                <Link to="/CorporateParty3">중·소연회장</Link>
            </li>
        </ul>
    )  
}

export default Tab2;