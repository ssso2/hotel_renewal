const Introduction = ({ title, description, tel, location, extraContent }) => {
    return (
        <>
            <div className="Introduction">
                <h3>{title}</h3>
                <p className="txt" dangerouslySetInnerHTML={{ __html: description }}></p>
                <div className="tel">
                    <span>문의전화</span>
                    <p>{tel}</p>
                </div>
            </div>
            <div className="info-wrap mt-0">
                <ul className="info flex">
                    <li className="list">
                        <h4>위치</h4>
                        <p className="txt">{location}</p>
                    </li>
                </ul>
                {extraContent && <div className="btn-wrap btn-250">{extraContent}</div>}
            </div>
        </>
    );
};

export default Introduction;
