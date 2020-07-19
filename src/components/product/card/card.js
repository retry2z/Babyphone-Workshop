import React from 'react';
import style from './card.module.css';
import defaultImage from '../../../images/blue-origami-bird.png';

const Card = ({ imageUrl, description, author, index }) => {
    const link = imageUrl || defaultImage;

    return (
        <div className={style.card}>
            <img src={link} alt="product" />
            <p className={style.description}>
                <span>{index + ' - '}</span>
                {description}
            </p>
            <div>
                <span>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>
    )
}

export default Card