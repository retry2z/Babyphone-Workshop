import React from 'react';
import style from './logo.module.css';
import { Link } from 'react-router-dom'

const Logo = ({ href, title }) => {
    return (
        <Link to='/' id='logo'>
            <div className={style.logo}>
                <img className={style.imgLogo} src={href} alt={title} />
            </div>
        </Link>
    )
}

export default Logo