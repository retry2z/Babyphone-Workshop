import React from 'react';
import style from './card.module.css'

const ActiveBtn = ({ type }) => {

    const theme = {
        owner: {
            title: 'Delete',
            style: style.room_owner_btn
        },
        join: {
            title: 'Join',
            style: style.room_join_btn
        },
        leave: {
            title: 'Leave',
            style: style.room_leave_btn
        },
    }

    return (
        <button className={theme[type].style}>{theme[type].title}</button>
    )
}

export default ActiveBtn