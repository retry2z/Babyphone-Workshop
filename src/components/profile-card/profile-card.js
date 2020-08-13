import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import style from './profile-card.module.css';
import defaultImage from '../../images/profile-icon.png';
import editButton from '../../images/edit-btn.png';

import ChangePassword from '../../components/profile-change-password/change-password';
import MyRooms from '../../components/profile-history-rooms/history-rooms';
import UserSettings from '../../components/profile-update-form/profile-update-form';

import DefinedButton from '../core/button/button';

const ProfileCard = ({ data, buttonOnClick, menuAction }) => {
    const name = data?.name || ''
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
        findActiveOption.class = 'active';
    } else {
        userMenuOptions[0].class = 'active'
    }

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
                {userMenuOptions.map(item => {
                    return (
                        <Link key={item.name} to={`?active=${item.name}`} onClick={item.onclick}>
                            <li className={style[item.class]}>
                                {item.value}
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <DefinedButton key='logout' title='Logout' action={buttonOnClick} />
        </div>
    )
}

export default ProfileCard