import React from 'react'
import style from './input.module.css'

const InputField = ({ type, label, onChange, value }) => {
    const id = Math.random() / 1000;

    const validators = (event) => {
        console.log(event);
    };

    return (
        <div className={style.input}>
            <input className={style.valid} id={id} type={type} onChange={onChange} onBlur={validators} value={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default InputField