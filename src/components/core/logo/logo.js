import React from 'react';
import style from './logo.module.css';


const Logo = ({ href, title }) => {
    return (
        <div className={style.logo}><img className={style.imgLogo} src={href} alt={title} /></div>
    )
}

export default Logo