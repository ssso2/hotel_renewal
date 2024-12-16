import React, { useState, useEffect } from "react";

const InputWithValidation = ({ label, id, name, value, onChange, validationFn, error, type = "text" }) => {
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (validationFn) {
            setValidationError(validationFn(value));
        }
    }, [value, validationFn]);

    return (
        <label className="my-info">
            <p>{label}</p>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={validationError || error ? 'error' : ''}
            />
            {(validationError || error) && <span className="error-msg">{validationError || error}</span>}
        </label>
    );
};

export default InputWithValidation;
