import React, { useState, useEffect } from 'react';
import './room.module.css';
import admin from '../../services/admin';
import Title from '../core/title/title';
import moment from 'moment';

const { db } = admin();

const NotificationCard = ({ data, id, isJoined }) => {
    const red = db.collection('rooms').doc(id);
    const parsedDate = moment(data.createdAt).utcOffset('+03:00').format('LL [-] HH:mm');
    const parsedKeyWords = !!data?.keyWords ? data.keyWords.join(', ') : '';
    const defaultValue = `\n\n\nRoom Keywords: ${parsedKeyWords} \nRoom Created at: ${parsedDate}\n`;
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const unsubscribe = red.onSnapshot(docSnapshot => {
            const parsedData = docSnapshot.data()
                .notificationHistory.map(item => {
                    const parsedTime = moment(item.time).utcOffset('+03:00').format('HH:mm');

                    return `[${parsedTime}]: ${item.message}`
                })
            setValue(defaultValue + '\n' + parsedData.join('\n'))
        });

        if (!isJoined) {
           setValue(defaultValue);
            unsubscribe();
            return
        }

        return () => {
            if (isJoined) {
                unsubscribe();
            }
        }
    }, [id, defaultValue, isJoined, red])

    return (
        <div>
            <Title title='Notifications' />
            <textarea value={value} disabled></textarea>
        </div>
    )
}

export default NotificationCard