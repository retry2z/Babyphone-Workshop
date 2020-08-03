import React from 'react';
import './room.module.css';

import Title from '../core/title/title';

const NotificationCard = ({data}) => {

    return (
        <div>
            <Title title='Notifications' />
            <textarea disabled></textarea>
        </div>
    )
}

export default NotificationCard