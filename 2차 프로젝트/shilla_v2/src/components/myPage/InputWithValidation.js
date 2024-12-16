import React, { useState } from 'react';

const InputWithValidation = ({ label, id, name, value, onChange, validationFn, type = 'text' }) => {
    const [error, setError] = useState('');

    const handleBlur = () => {
        const validationError = validationFn(value);
        setError(validationError);
    };

    const handleChange = (e) => {
        onChange(e);
        setError(''); // 입력하는 동안 에러 메시지 초기화
    };

    return (
        <label className="my-info">
            <p>{label}</p>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && <span className="error-msg">{error}</span>}
        </label>
    );
};

export default InputWithValidation;
