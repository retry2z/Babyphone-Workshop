import React from 'react'
import style from './common.module.css';
import Header from '../core/header/header';
import Aside from '../core/aside/aside';
import Main from '../core/main/main';
import Footer from '../core/footer/footer';

const Common = (props) => {
    return (
        <div className={style.app}>
            <Header />

            <div className={style.container}>
                <Aside />

                <Main>
                    {props.children}
                </Main>
            </div>

            <Footer />
        </div>
    )
}

export default Common;

