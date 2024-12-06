import React, { useEffect, useState } from "react";

const CommentBtn = ({data,user,commentDelGo,commentModify,commentModifySet}) => {

    




    if(data.member_id == user.id){
        return  <>
                    <button className="edit" onClick={(commentModify == 1)?()=>commentModifySet(0):()=>commentModifySet(1)}>수정</button>
                    <button className="delete" onClick={commentDelGo}>삭제</button>
                </>
    }
    return ;
};

export default CommentBtn;
