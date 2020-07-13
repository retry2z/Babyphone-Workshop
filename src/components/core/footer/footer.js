import React from 'react';
import Link from '../link/link';
import style from './footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul>
                <Link href="#" title="Going to 1" />
                <Link href="#" title="Going to 2" />
                <Link href="#" title="Going to 3" />
            </ul>
            <p>Software University 2020</p>
        </footer>
    )
}

export default Footer