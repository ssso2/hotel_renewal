import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyPwChkCont from "./MyPwChkCont";

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInfoChgCont = () => {
    const navigate = useNavigate();

    const [text, setText] = useState({});
    const [user, setUser] = useState(null);
    const [pwChk, pwChkSet] = useState(0);
    const [newPw, setNewPw] = useState('');
    const [newPwChk, setNewPwChk] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [oldPw, setOldPw] = useState('');
    const [error, setError] = useState('');

    const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/;

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        if (id) {
            setUser({ 'id': id, "name": name, "grade": grade });
        } else {
            setUser(null);
        }

        if (id) {
            axios.get(`${bkURL}/mypage/${id}`)
                .then(res => {
                    setText(res.data);
                    setUserPhone(res.data.phone);
                    setUserEmail(res.data.email);
                })
                .catch(err => {
                    console.error('Error fetching user data: ', err);
                });
        }

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 비밀번호 유효성 검사 (새 비밀번호에 대해서만)
        if (newPw && !pwtype.test(newPw)) {
            setError('새 비밀번호는 12~16자 사이, 영문자, 숫자, 특수문자를 포함해야 합니다.');
            return;
        }

        // 새 비밀번호 확인 일치 여부 검사
        if (newPw !== newPwChk) {
            setError('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');
            return;
        }

        // 기존 비밀번호 확인
        try {
            const response = await axios.post(`${bkURL}/mypage/myInfoChg`, { id: user.id, pw: oldPw });

            if (response.status === 200) {
                // 비밀번호 확인이 성공하면 회원정보 수정 요청
                const updateResponse = await axios.put(`${bkURL}/mypage/myInfoChg/${user.id}`, {
                    phone: userPhone,
                    email: userEmail,
                    pw: newPw || undefined, // 새 비밀번호가 비어있다면 업데이트하지 않음
                });

                if (updateResponse.status === 200) {
                    alert(`${user.name}님, 회원 정보가 성공적으로 수정되었습니다.`);
                    navigate('/mypage'); // 성공 후 마이페이지로 이동
                }
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data); // 서버에서 전송된 에러 메시지 표시
            } else {
                setError('비밀번호 확인 실패 또는 회원정보 수정에 실패했습니다.');
            }
            console.error('Error during password verification or update:', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userPhone') {
            setUserPhone(value);
        } else if (name === 'userEmail') {
            setUserEmail(value);
        } else if (name === 'newPw') {
            setNewPw(value);
        } else if (name === 'newPwChk') {
            setNewPwChk(value);
        } else if (name === 'oldPw') {
            setOldPw(value);
        }
    };

    const readOnlyData = [
        { title: "아이디", id: "userId", value: text.member_id, name: 'userId', type: 'text' },
        { title: "이름(국문)", id: "userName", value: text.name, name: 'userName', type: 'text' },
        { title: "이름(영문)", id: "userName_eng", value: text.name_eng, name: 'userName_eng', type: 'text' },
        { title: "생년월일", id: "userBirth", value: text.birth, name: 'userBirth', type: 'text' },
    ];

    const myInfoText = [
        { title: "연락처", id: "userPhone", value: userPhone, name: 'userPhone', type: 'text' },
        { title: "이메일", id: "userEmail", value: userEmail, name: 'userEmail', type: 'text' },
        { title: "현 비밀번호", id: "oldPw", value: oldPw, name: 'oldPw', type: 'password' },
        { title: "새 비밀번호", id: "newPw", value: newPw, name: 'newPw', type: 'password' },
        { title: "비밀번호 확인", id: "newPwChk", value: newPwChk, name: 'newPwChk', type: 'password' },
    ];

    if (!pwChk) {
        return <MyPwChkCont user={user} pwChkSet={pwChkSet} />
    }

    return (
        <form name="myInfoChgFrm" className="mypage-info" id="mypage-info" onSubmit={handleSubmit}>
            <h2 className="title">회원정보 수정</h2>
            {
                readOnlyData.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type={item.type} id={item.id} name={item.name} value={item.value} readOnly />
                        </label>
                    );
                })
            }
            {
                myInfoText.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type={item.type} id={item.id} name={item.name} value={item.value} onChange={handleChange} />
                            {item.name === 'newPw' && error && <span className="error-msg">{error}</span>}
                        </label>
                    );
                })
            }
            <input type="submit" className="edit-btn" value="수정완료" />
        </form>
    )
};

export default MyInfoChgCont;
