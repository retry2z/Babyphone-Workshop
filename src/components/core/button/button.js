import React from 'react'
import style from './button.module.css'

const DefinedButton = ({ title = 'Default', action, isDisabled = false }) => {

    return (
        <button className={style.button} onClick={action} disabled={isDisabled}>{title}</button>
    )
}

export default DefinedButton