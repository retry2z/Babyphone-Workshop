import React from 'react'
import style from './input.module.css'

const InputField = ({ isValid = false, type, label, onChange, validators, value, message }) => {
    const id = Math.random() / 1000;

    const emailValidator = (data) => {
        const patternLength = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
        if (!patternLength.test(data)) {
            return false
        }

        return true
    }

    const validatorsn = (event) => {
        console.log(event);
    };

    return (
        <div className={style.input}>
            <input
                className={isValid ? style['valid'] : style['invalid']}
                id={id}
                type={type}
                onChange={onChange}
                onBlur={validators}
                value={value}
            />
            <label className={style.label} htmlFor={id}>{label}</label>
            <span className={style.span}>{message} Test</span>
        </div>
    )
}

export default InputField