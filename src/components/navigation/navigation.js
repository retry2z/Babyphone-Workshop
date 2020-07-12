import React from 'react';
import style from './navigation.module.css';
import Item from './item';

const Navigation = () => {
    return (
        <header className={style.navigation}>
            <ul>
                <Item name="Going to 1" path="#" />
                <Item name="Going to 2" path="#" />
                <Item name="Going to 3" path="#" />
            </ul>
        </header>
    )
}


export default Navigation;