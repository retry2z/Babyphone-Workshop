import React from 'react';
import style from './errorField.module.css';


const ErrorField = ({ message }) => {
    return (
    <p className={style.error}>{message}</p>
    )
}

export default ErrorField