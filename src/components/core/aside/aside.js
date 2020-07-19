import React from 'react';
import Links from '../links/links';
import style from './aside.module.css';

const Aside = () => {

    return (
        <aside className={style.aside}>
            <ul>
                <Links />
            </ul>
        </aside>
    )
}

export default Aside