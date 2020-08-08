import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import style from './profile-card.module.css';
import defaultImage from '../../images/profile-icon.png';

import ChangePassword from '../../components/profile-change-password/change-password';
import MyRooms from '../../components/profile-history-rooms/history-rooms';
import UserSettings from '../../components/profile-update-form/profile-update-form';

import DefinedButton from '../core/button/button';

const ProfileCard = ({ data, buttonOnClick, menuAction }) => {
    const name = data?.name || 'Loading...'
    const email = data?.email || 'Loading...';
    const imageUrl = data?.imageUrl || defaultImage;

    const { search } = useLocation();
    const urlParams = new URLSearchParams(search);
    const active = urlParams.get('active');
    const userMenuOptions = [
        {
            name: 'MyRooms',
            class: '',
            value: 'My Rooms',
            onclick: () => menuAction(<MyRooms />)
        },
        {
            name: 'UserSettings',
            class: '',
            value: 'User Settings',
            onclick: () => menuAction(<UserSettings />)
        },
        {
            name: 'ChangePassword',
            class: '',
            value: 'Change Password',
            onclick: () => menuAction(<ChangePassword />)
        },
    ];

    const findActiveOption = userMenuOptions.find(x => x.name === active);
    if (findActiveOption) {
        findActiveOption.class = 'active'
    } else {
        userMenuOptions[0].class = 'active'
    }

    return (
        <div className={style.profile}>
            <div className={style.personalInfo}>
                <div>
                    <img src={imageUrl} alt="Profile" />
                </div>
                <div>
                    Name:
                    <span>{name}</span>
                </div>
                <div>
                    Email:
                    <span>{email}</span>
                </div>
            </div>
            <hr />
            <ul className={style.profile_options}>
                {userMenuOptions.map(item => {
                    return (
                        <li key={item.name} className={style[item.class]}>
                            <Link to={`?active=${item.name}`} onClick={item.onclick}>
                                {item.value}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <DefinedButton title='Logout' action={buttonOnClick} />
        </div>
    )
}

export default ProfileCard