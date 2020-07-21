import React from 'react'
import style from './input.module.css'

const InputField = ({ id, label, onChange, value }) => {
    return (
        <div className={style.input}>
            <input type={id} onChange={onChange} value={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default InputField