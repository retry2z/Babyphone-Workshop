import React from 'react'
import style from './button.module.css'

const DefinedButton = ({ title = 'Default', action, isDisabled = false, theme = 'default' }) => {

    return (
        <button className={style['button_' + theme]} onClick={action} disabled={isDisabled}>{title}</button>
    )
}

export default DefinedButton