import '../../scss/sub-detail.scss';
import '../../scss/reset.css';
import '../../scss/common.scss';
import { Link } from 'react-router-dom';

function StandardDelux(props) {
    return (
        <div>
            <h2>스탠다드 디럭스</h2>
            <ul class="tab tab-long">
                <li className="tab1 on"><Link to="../../html/sub/sub02_01_01.html">디럭스</Link></li>
                <li className="tab2"><Link to="../../html/sub/sub02_01_02.html">비즈니스 디럭스</Link></li>
                <li className="tab3"><Link to="../../html/sub/sub02_01_03.html">베리어프리 비즈니스 디럭스</Link></li>
                <li className="tab4"><Link to="../../html/sub/sub02_01_04.html">그랜드 코너 디럭스</Link></li>
            </ul>
        </div>
    );
}

export default StandardDelux;