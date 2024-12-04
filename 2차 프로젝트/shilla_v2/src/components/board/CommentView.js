import React, { useEffect, useState } from "react";
import CommentBtn from './CommentBtn'
import CommentWrite from './CommentWrite'
import { useParams } from "react-router-dom";

const bkURL = process.env.REACT_APP_BACK_URL;

const CommentView = ({commentText,detailText,setDetailText,user,commentFetchData,commentDelGo}) => {

    const [commentModify,commentModifySet] = useState(1)

    const {id} = useParams();

    useEffect(()=>{

        if(!id){
            console.log('id 없음');
            return 
        }


        axios.get(`${bkURL}/board/detail/${id}`)
        .then(res=>{
            console.log('정보받기 성공',res.data);
            setDetailText(res.data)
            console.log('detailText :',detailText);
            
        })
        .catch(err=>{
            console.error('정보받기 실패',err);
        })
    },[id])

    function textChg(key,me) {
        setDetailText({...detailText,[key]:me.value})
    }

    function submitGo(e) {
        e.preventDefault();
        const frmData = new FormData(document.commentModifyFrm);
        const myData = Object.fromEntries(frmData)
        console.log(myData);


        axios.put(`${bkURL}/comment/detail/${id}`,myData)
        .then(res=>{
            console.log('정보 수정 성공',res.data);
            alert('수정되었습니다.')
            commentFetchData()
        })
        .catch(err=>{
            console.error('정보 수정 실패',err);
        })

    }

    const ModifyGo = ({modifyData}) => {
        if(commentModify === 1){
            return  <>
                        <div className="textarea">
                            <textarea readOnly className="new-reply">{modifyData.context}</textarea>
                        </div>

                        <div className="reply-info">
                            <span className="time">{modifyData.reg_str} 등록</span>
                            <CommentBtn data={modifyData} user={user} commentDelGo={()=>commentDelGo(modifyData.comment_id)} commentModify={commentModify} commentModifySet={commentModifySet}/>
                        </div>
                    </>
        }
        else if(commentModify === 0){
            return  <form name="commentModifyFrm">
                        <div className="textarea">
                            <textarea className="new-reply" name="context" onChange={(e)=>textChg('context',e.target)}>{modifyData.context}</textarea>
                        </div>

                        <div className="reply-info">
                            <span className="time">{modifyData.reg_str} 등록</span>
                            <button type="reset" className="edit" onClick={(commentModify == 1)?()=>commentModifySet(0):()=>commentModifySet(1)}>취소</button>
                            <button className="delete" onClick={submitGo}>수정완료</button>
                        </div>
                    </form>
        }
    }
    // console.log("commentModify:",commentModify);






    for(let i = 0; i < commentText.length; i++){

        
        if(detailText.board_id == commentText[i].board_id){
            return  <div>
                        <span className="reply-title">댓글</span>
                        <div className="reply-box">
                            <div className="reply-content">
                                <span className="name">관리자</span>
                            </div>
                            <ModifyGo modifyData={commentText[i]} />
                            {/* <>
                                <div className="textarea">
                                    <textarea readOnly className="new-reply">{commentText[i].context}</textarea>
                                </div>

                                <div className="reply-info">
                                    <span className="time">{commentText[i].reg_str} 등록</span>
                                    <CommentBtn data={commentText[i]} user={user} commentDelGo={()=>commentDelGo(commentText[i].comment_id)} commentModify={commentModify} commentModifySet={commentModifySet}/>
                                </div>
                            </> */}
                        </div>
                    </div>
        }

    }
    if(user.grade == 1){
        return (<CommentWrite user={user} detailText={detailText}  commentFetchData={commentFetchData}/>)
    }
    return;
};

export default CommentView;
