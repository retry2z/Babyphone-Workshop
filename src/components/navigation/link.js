import React from 'react';
import style from './navigation.module.css';


const Item = ({ href, title }) => {
    return (
        <li className={style.listItem}><a href={href}>{title}</a></li>
    )
}

export default Item