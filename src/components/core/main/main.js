import React from 'react';
import style from './main.module.css'

const Main = (props) => {
    return (
        <main className={style.main}>
            <h1>Some header and title of the page</h1>
            {props.children}
        </main>
    )
}

export default Main