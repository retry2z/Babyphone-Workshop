import React from 'react';
import style from './card.module.css';
import defaultImage from '../../images/logo.png';

import ActiveBtn from './button';

const ProductCard = ({ data }) => {
    const author = data?.author || '...';
    const imageUrl = data?.imageUrl || 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    const people = data?.people || 'Loading...';

    return (
        <div className={style.room}>
            <img src={imageUrl} alt="Room_image" className={style.room_image} />

            <h5 className={style.room_name}>Bed Room</h5>

            <div className={style.people}>
                <div className={style.person}>
                    <p>Pizza dough</p>
                </div>
                <div className={style.person}>
                    <p>Cheese</p>
                </div>
                <div className={style.person}>
                    <p>Tomato sauce</p>
                </div>
                <div className={style.person}>
                    <p>Floor</p>
                </div>
            </div>
            <ActiveBtn type='owner' />
        </div>
    )
}

export default ProductCard