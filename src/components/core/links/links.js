import React from 'react';
import style from './links.module.css';
import { Link } from 'react-router-dom';
import router from '../../../routes/routes';


const Links = () => {
    const navigation = router();

    return (
        <>
            {
                navigation.map(path => {
                    return (
                        <li key={path.title} className={style.listItem}>
                            <Link to={path.link}>{path.title}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default Links