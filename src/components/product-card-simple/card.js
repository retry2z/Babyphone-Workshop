import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

const ProductCardSimple = ({ data }) => {
    const title = data?.title || 'Loading...';
    const words = !!data?.keyWords ?  data.keyWords : [];
    const keywords = words.join(', ');
    const id = data?.id || 'error';

    return (
        <Link to={'/product/details/' + id} style={{ textDecoration: 'none' }}>
            <div className={style.card_simple}>
                <div className={style.body}>
                    <p>
                        <span>Title: </span>
                        {title}
                    </p>
                    <p>
                        <span>Key words: </span>
                        {keywords}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCardSimple