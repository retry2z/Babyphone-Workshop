import React from 'react';
import style from './card.module.css'

const ActiveBtn = ({ type = 'default', onClick }) => {

    const theme = {
        join: {
            title: 'Join',
            style: style.room_join_btn
        },
        leave: {
            title: 'Leave',
            style: style.room_leave_btn
        },
        owner: {
            title: 'Delete',
            style: style.room_owner_btn
        },
        default: {
            title: 'Loading...',
            style: style.room_default_btn
        },
    }

    return (
        <button className={theme[type].style} onClick={onClick}>{theme[type].title}</button>
    )
}

export default ActiveBtn