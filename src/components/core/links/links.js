import React, { useContext } from 'react';
import style from './links.module.css';
import { Link } from 'react-router-dom';
import headerLinks from './routes';

import Contexts from '../../../Contexts';
const { UserContext } = Contexts();

const Links = () => {
    const context = useContext(UserContext);

    const navigation = headerLinks(context.isLogged);

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