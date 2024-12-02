import '../../scss/reset.css';
import '../../scss/common.scss';
import '../../scss/sub-detail.scss';
import StandardDelux from './StandardDelux';

const StandardContainer = () => {
    return (
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <StandardDelux />
                </div>
            </div>
        </div>
    );
}

export default StandardContainer;