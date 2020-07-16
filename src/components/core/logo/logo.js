import React from 'react';
import style from './logo.module.css';


const Logo = ({ href, title }) => {
    return (
        <li className={style.logo}><img className={style.imgLogo} src={href} alt={title} /></li>
    )
}

export default Logo