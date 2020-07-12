import React from 'react';
import Link from '../link/link';
import style from './aside.module.css';

const Aside = () => {
    return (
        <aside className={style.aside}>
            <ul>
                <Link href="#" title="Going to 1" />
                <Link href="#" title="Going to 2" />
                <Link href="#" title="Going to 3" />
            </ul>
        </aside>
    )
}

export default Aside