import React from 'react';
import style from './link.module.css';


const Item = ({ href, title }) => {
    return (
        <li className={style.listItem}><a href={href}>{title}</a></li>
    )
}

export default Item