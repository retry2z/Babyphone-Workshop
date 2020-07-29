import React from 'react';
import './room.module.css'

import Common from '../../components/common/common';
import ProductCard from '../../components/product-card-simple/card';
import productService from '../../services/product-service';
import InformationPanel from '../../components/information-panel/information-panel';
import DefinedButton from '../../components/core/button/button';

class Room extends React.Component {
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
            .slice(0, 3)
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
                <textarea></textarea>
                <DefinedButton title='Post' />
                <InformationPanel title='History'>
                    {this.state.data}
                </InformationPanel>
            </Common>
        )
    }
}

export default Room