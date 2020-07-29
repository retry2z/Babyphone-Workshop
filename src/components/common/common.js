import React from 'react'
import style from './common.module.css';
import Header from '../core/header/header';
import Main from '../core/main/main';
import Footer from '../core/footer/footer';

import { withRouter } from 'react-router-dom';

class Common extends React.Component {

    constructor(props) {
        super(props);

        this.currentPath = this.props.location.pathname.split('/')[1];
        this.background = !!this.currentPath.length ? this.currentPath : 'default';
    }


    render() {
        return (
            <>
                <div className={style[this.background]} ></div>

                <div className={style.main}>
                    <Header />

                    <Main>
                        {this.props.children}
                    </Main>

                    <Footer />
                </div>
            </>
        )
    }
}

export default withRouter(Common)

