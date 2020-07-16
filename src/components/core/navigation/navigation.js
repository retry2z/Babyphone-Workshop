import React from 'react';
import style from './navigation.module.css';
import Link from '../link/link';
import Logo from '../logo/logo';
import logo from '../../../images/white-origami-bird.png';

const Navigation = () => {
    return (
        <header className={style.navigation}>
            <ul>
                <Logo href={logo} title="Logo" />
                <Link href="#" title="Going to 1" />
                <Link href="#" title="Going to 2" />
                <Link href="#" title="Going to 3" />
            </ul>
        </header>
    )
}


export default Navigation;