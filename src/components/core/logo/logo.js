import React from 'react';
import style from './logo.module.css';
import { Link } from 'react-router-dom'

const Logo = ({ href, title }) => {
    return (
        <div className={style.logo}>
            <Link to='/' id='logo'>
                <img className={style.imgLogo} src={href} alt={title} />
            </Link>
        </div>
    )
}

export default Logo