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
                        <Link key={path.title} to={path.link}>
                            <li className={style.listItem}>
                                {path.title}
                            </li>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Links