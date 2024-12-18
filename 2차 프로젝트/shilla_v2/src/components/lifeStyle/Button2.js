import React from 'react';
import { Link } from 'react-router-dom';

const Button2 = ({propBtn}) => {
    return (
        <div className="btn-wrap btn-300">
            <Link to="https://www.shilladfs.com/" className="btn btn-01" target="_blank">신라면세점 홈페이지 바로가기</Link>
        </div>
    );
};

export default Button2;
