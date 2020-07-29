import React from 'react';
import style from './card.module.css';
import defaultImage from '../../images/room-default.jpg';

import ActiveBtn from './button';

const ProductCard = ({ data, type = 'join' }) => {
    const author = data?.author || '...';
    const imageUrl = data?.imageUrl || defaultImage;
    const people = data?.people || 'Loading...';

    return (
        <div className={style.room}>
            <img src={imageUrl} alt="Room_image" className={style.room_image} />

            <h5 className={style.room_name}>Bed Room</h5>

            <div className={style.people}>
                <div className={style.person}>
                    <p>{people}</p>
                </div>
                <div className={style.person}>
                    <p>{author}</p>
                </div>
                <div className={style.person}>
                    <p>Tomato sauce</p>
                </div>
                <div className={style.person}>
                    <p>Floor</p>
                </div>
            </div>
            <ActiveBtn type={type} />
        </div>
    )
}

export default ProductCard