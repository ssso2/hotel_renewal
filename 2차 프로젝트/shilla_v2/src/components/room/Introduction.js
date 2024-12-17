import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <div className="Introduction">
            <h3 className="room-title">디럭스</h3>
            <p className="room-top-txt">모던한 콘셉트의 아늑한 공간 안에 편안한 휴식을 선사하는 침구와 업무를 위한 책상을 갖추어 효율적인 구성이 돋보이는 객실입니다.</p>
            <p className="txt">
                안락한 공간이 주는 편안함과 함께 일상에서 벗어난 듯한 특별한 휴식을 경험해보시기 바랍니다.
            </p>
            <div className="btn-wrap type1">
                <Link to="/reserve" className="btn btn-02">객실예약하기</Link>
                <button className="btn btn-01" data-lybtn="pop-eudInfo3"><span>객실 도면</span></button>
            </div>
        </div>
    )
}

export default Introduction;