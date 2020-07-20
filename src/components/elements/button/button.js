import React from 'react'
import style from './button.module.css'

const DefinedButton = ({ title, action }) => {

    return (
        <button className={style.button} onClick={action}>{title}</button>
    )
}

export default DefinedButton