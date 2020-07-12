import React from 'react';
import style from './product.module.css'
import Card from './card/card';

const Product = () => {
    return (
        <div className={style.container}>
            <Card author="test author" description="default desc"/>
            
        </div>
    )
}

export default Product