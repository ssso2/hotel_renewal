import '../../scss/reset.scss';
import '../../scss/common.scss';
import '../../scss/sub-detail.scss';
import StandardCont1 from './StandardCont1';

const StandardContainer = () => {
    const StandardTypeData = [
        {
            type: '',
            StandardBox: [
                {
                    aa:'asdf',
                    bb:'asdf',
                    cc:'asdf',
                }
            ]
        }
    ]

    const [stand, standSet] = useState(StandardTypeData)

    return (
        <>
            <div className="container">
                <div className="center">
                    <dlv className="depth3-tab-wrap">
                        <StandardCont1 />
                        {/* <StandardCont2 /> */}
                    </dlv>
                </div>
            </div>
        </>
    );
}

export default Standard;