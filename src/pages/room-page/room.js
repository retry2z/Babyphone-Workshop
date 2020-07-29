import React from 'react';
import styled from 'styled-components';
import './room.module.css';

import Common from '../../components/common/common';
import ProductCard from '../../components/product-card/card';
import productService from '../../services/product-service';
import Title from '../../components/core/title/title';

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
                <Wrapper>
                    <ProductCard type='leave' />
                    <div>
                        <Title title='Notifications' />
                        <textarea disabled></textarea>
                    </div>
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    display: grid;
    padding: 2%;
    margin: 0 auto;
    grid-template-columns: 28% 62%;
    grid-gap: 10%;
    padding-left: 5%;
    padding-bottom: 5%
`;


export default Room