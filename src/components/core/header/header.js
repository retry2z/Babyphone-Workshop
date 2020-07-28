import React from 'react';
import style from './header.module.css';
import Links from '../links/links';
import Logo from '../logo/logo';
import logoImage from '../../../images/white-origami-bird.png';

const Header = () => {

    return (
        <header className={style.navigation}>
            <Logo href={logoImage} title="Logo" />
            <ul>
                <Links />
            </ul>
        </header>
    )
}


export default Header;