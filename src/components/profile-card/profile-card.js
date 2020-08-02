import React from 'react';
import style from './profile-card.module.css';
import defaultImage from '../../images/profile-icon.png';

import DefinedButton from '../core/button/button';

const ProfileCard = ({ data, onClick }) => {
    const name = data?.name || 'Name'
    const email = data?.email || 'example@domain.com';
    const imageUrl = data?.imageUrl || defaultImage;

    return (
        <div className={style.profile}>
            <div className={style.personalInfo}>
                <img src={imageUrl} alt="Profile" />
                <p>
                    {name}
                </p>
                <p>
                    {email}
                </p>
                <p>
                    <span>Room History</span>
                </p>
                <DefinedButton title='Logout' action={onClick} />
            </div>
        </div>
    )
}

export default ProfileCard