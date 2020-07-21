import React from 'react'
import style from './input.module.css'

const InputField = ({ type, placeholder, onChange, value }) => {
    return (
        <div className={style.input}>
            <input type={type} onChange={onChange} value={value} />
            <label htmlFor={type}>{placeholder}</label>
        </div>
    )
}

export default InputField