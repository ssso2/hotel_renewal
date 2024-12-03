import React from "react";

const CommentWrite = ({}) => {
    
    return (
        <form action="" method="post" className="comment_write">
            <span className="reply-title">댓글쓰기</span>
            <div className="reply-box-sec">
                {/* <!-- 댓글 창 전체 박스 --> */}
                <div className="reply-content-ing">
                    {/* <!-- 댓글 상단 작성자 이름 들어갈 박스 --> */}
                    <span className="user-name">박세라</span>
                </div>
                <textarea id="reply" placeholder="댓글을 작성하세요."></textarea>

                <div className="reply-info">
                    {/* <!-- 작성시간, 수정, 삭제 들어갈 박스--> */}
                    <button id="plus">댓글등록</button>
                </div>
            </div>
        </form>
    );
};

export default CommentWrite;
