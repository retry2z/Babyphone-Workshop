import React from 'react';
import style from './navigation.module.css';
import Link from '../link/link';
import Logo from '../logo/logo';
import logo from '../../../images/white-origami-bird.png';
import router from '../../routes/routes';

const Navigation = () => {
    const navigation = router();

    return (
        <header className={style.navigation}>
            <ul>
                <Logo href={logo} title="Logo" />
                {
                    navigation.map(path => {
                        return <Link href={path.link} title={path.title} />
                    })
                }
            </ul>
        </header>
    )
}


export default Navigation;