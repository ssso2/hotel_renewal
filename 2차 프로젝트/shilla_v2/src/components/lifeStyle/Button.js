import React from 'react';

const Button = ({propBtn}) => {
    return (
        <div class="btn-wrap btn-250">
            <button type="button" class="btn btn-01" data-lybtn="pop-map">{propBtn}</button>
        </div>
    );
};

export default Button;
