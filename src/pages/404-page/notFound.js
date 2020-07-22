import React from 'react'
import style from './notFound.module.css';
import Title from '../../components/core/title/title';
import defaultImage from '../../images/404.png';

import Common from '../../components/common/common';


const Notfound = (props) => {
    return (
        <Common>
            <div className={style.fourOFour}>
                <Title title='Something went wrong' />
                <img src={defaultImage} alt="404 Page not found" />
            </div>
        </Common>
    )
}

export default Notfound;

