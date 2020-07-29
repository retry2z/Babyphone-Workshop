import React from 'react';
import style from './card.module.css';
import defaultImage from '../../images/logo.png';

const ProductCard = ({ data }) => {
    const author = data?.author || '...';
    const imageUrl = data?.imageUrl || defaultImage;
    const description = data?.description || 'Loading...';
    const number = (data?.index >= 0) ? data.index : '?';

    return (
        <div className={style.card}>
            <img src={imageUrl} alt="product" />
            <p className={style.description}>
                <span>{number + ' - '}</span>
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

export default ProductCard