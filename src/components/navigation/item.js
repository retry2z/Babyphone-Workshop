import React from 'react';
import style from './navigation.module.css';


const Item = (props) => {
    return (
        <li className={style.listItem}><a href={props.path}>{props.name}</a></li>
    )
}

export default Item