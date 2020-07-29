import React from 'react';
import './room.module.css'

import Common from '../../components/common/common';
import ProductCard from '../../components/product-card/card';
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

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 5%;
    padding: 5%;
`;

export default Room