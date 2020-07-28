import React from 'react'
import style from './common.module.css';
import Header from '../core/header/header';
import Main from '../core/main/main';
import Footer from '../core/footer/footer';

import { withRouter } from 'react-router-dom';

class Common extends React.Component {

    constructor(props) {
        super(props);

        this.test = props
    }


    render() {
        return (
            <div className={style[this.props.location.pathname.split('/')[1]]} >
                <Header />

                <div className={style.container}>
                    <Main>
                        {this.props.children}
                    </Main>
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(Common)

