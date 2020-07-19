import React from 'react';
import Link from '../link/link';
import style from './footer.module.css';
import router from '../../routes/routes';

const Footer = () => {
    const navigation = router();

    return (
        <footer className={style.footer}>
            <ul>
                {
                    navigation.map(path => {
                        return <Link href={path.link} title={path.title} />
                    })
                }
            </ul>
            <p>Software University 2020</p>
        </footer>
    )
}

export default Footer