import React from 'react';
import style from './navigation.module.css';
import Link from '../link/link';

const Navigation = () => {
    return (
        <header className={style.navigation}>
            <ul>
                <Link href="#" title="Going to 1" />
                <Link href="#" title="Going to 2" />
                <Link href="#" title="Going to 3" />
            </ul>
        </header>
    )
}


export default Navigation;