import React from 'react'
import style from './input.module.css'

const InputField = ({ type, placeholder, onChange, value }) => {
    const id = Math.random() / 1000;

    return (
        <div className={style.input}>
            <input id={id} type={type} onChange={onChange} value={value} />
            <label htmlFor={id}>{placeholder}</label>
        </div>
    )
}

export default InputField