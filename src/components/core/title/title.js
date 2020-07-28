import React from 'react';
import style from './title.module.css';


const Title = ({ title }) => {
    return (
    <h2 className={style.title}>{title}</h2>
    )
}

export default Title