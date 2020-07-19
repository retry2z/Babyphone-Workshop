import React from 'react';

import ProductList from '../../components/product/list/list';
import Common from '../../components/common/common';

const Home = () => {
    return (
        <Common>
            <h1>Publications</h1>
            <ProductList />
        </Common>
    )
}

export default Home