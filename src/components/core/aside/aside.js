import React from 'react';
import Link from '../link/link';
import style from './aside.module.css';
import router from '../../../routes/routes';


const Aside = () => {
    const navigation = router();

    return (
        <aside className={style.aside}>
            <ul>
                {
                    navigation.map(path => {
                        return <Link href={path.link} title={path.title} />
                    })
                }
            </ul>
        </aside>
    )
}

export default Aside