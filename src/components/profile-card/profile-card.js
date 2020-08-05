import React from 'react';
import style from './profile-card.module.css';
import defaultImage from '../../images/profile-icon.png';

import DefinedButton from '../core/button/button';

const ProfileCard = ({ data, onClick, action }) => {
    const name = data?.name || 'Loading...'
    const email = data?.email || 'Loading...';
    const imageUrl = data?.imageUrl || defaultImage;

    const setAction = (value) => {
        action(value);
    }

    return (
        <div className={style.profile}>
            <div className={style.personalInfo}>
                <div className={style.option}>
                    <img src={imageUrl} alt="Profile" />
                </div>
                <div className={style.option}>
                    Name:
                    <span>{name}</span>
                </div>
                <div className={style.option}>
                    Email:
                    <span>{email}</span>
                </div>
            </div>
            <hr />
            <ul className={style.profile_options}>
                <li className={style.profile_listItem} onClick={() => setAction('MyRooms')}>My Rooms</li>
                <li className={style.profile_listItem} onClick={() => setAction('UserSettings')}>User Settings</li>
                <li className={style.profile_listItem} onClick={() => setAction('ChangePassword')}>Change password</li>
            </ul>
            <hr />
            <DefinedButton title='Logout' action={onClick} />
        </div>
    )
}

export default ProfileCard