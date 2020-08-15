import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile-card.module.css';
import defaultImage from '../../images/profile-icon.png';
import editButton from '../../images/edit-btn.png';

import DefinedButton from '../core/button/button';

const ProfileCard = ({ data, buttonOnClick, activeMenu, componentMenu }) => {
    const name = data?.name || ''
    const email = data?.email || 'Loading...';
    const imageUrl = data?.imageUrl || defaultImage;

    const userMenuOptions = [
        {
            name: 'MyRooms',
            value: 'My Rooms',
        },
        {
            name: 'UserSettings',
            value: 'User Settings',
        },
        {
            name: 'ChangePassword',
            value: 'Change Password',
        },
    ];


    return (
        <div className={style.profile}>
            <div className={style.personalInfo}>
                <div>
                    <Link to='/user/profile/image/upload'>
                        <img className={style.profile_image} src={imageUrl} alt="Profile" />
                        <div className={style.profile_edit}>
                            <img className={style.profile_edit_img} src={editButton} alt='Edit' />
                        </div>
                    </Link>
                </div>
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    <span>{email}</span>
                </div>
            </div>
            <ul className={style.profile_options}>
                {
                    userMenuOptions.map(item => {
                        return (
                            <Link key={item.name} to={`?active=${item.name}`} onClick={() => componentMenu(item.name)}>
                                <li className={
                                    style[item.name === activeMenu ? 'active' : null]
                                }>
                                    {item.value}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
            <DefinedButton key='logout' title='Logout' action={buttonOnClick} />
        </div>
    )
}

export default ProfileCard