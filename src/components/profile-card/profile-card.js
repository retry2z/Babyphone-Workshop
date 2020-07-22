import React from 'react';
import style from './profile-card.module.css';
import defaultImage from '../../images/profile-icon.png';

import DefinedButton from '../core/button/button';

const ProfileCard = ({ data }) => {
    const name = data?.name || 'Name'
    const email = data?.email || 'example@domain.com';
    const imageUrl = data?.imageUrl || defaultImage;
    const count = data?.count || 0;


    return (
        <div className={style.profile}>
            <div className={style.personalInfo}>
            <img src={imageUrl} alt="Profile" />
                <p>
                    {email}
                </p>
                <p>
                    <span>Created post: </span>
                    {count}
                </p>
                <DefinedButton title='Logout' />
            </div>
        </div>
    )
}

export default ProfileCard