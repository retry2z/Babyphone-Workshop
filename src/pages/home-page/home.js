import React from 'react';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import ProductCard from '../../components/product-card/card';
import productService from '../../services/product-service';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: <ProductCard />,
        }
    }

    componentDidMount = async () => {
        const { data } = await productService.list();

        const result = data
            .sort((a, b) => Number(new Date(a.createdAt)) - Number(new Date(b.createdAt)))
            .map((doc, index) => {
                return <ProductCard key={doc.id} data={{ index, ...doc }} />
            })

        this.setState({
            data: result
        });
    }

    render() {
        return (
            <Common>
                <> {this.state.data} </>
            </Common>
        )
    }
}

export default Home