import React from 'react';
import styled from 'styled-components';
import './room.module.css';

import Common from '../../components/common/common';
import ProductCard from '../../components/product-card/card';
import productService from '../../services/product-service';
import Title from '../../components/core/title/title';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    static contextType = UserContext;

    componentDidMount = async () => {
        const { match: { params } } = this.props;

        try {
            const { data } = await productService.get(params.id);
            this.setState({
                data,
            })
        }
        catch (e) {
            this.props.history.push('/error/room');
        }
    }

    onJoinHandler = (isJoined) => {
        console.log(isJoined);
    }

    render() {
        return (
            <Common>
                <Wrapper>
                    <ProductCard data={this.state.data} onJoinHandler={this.onJoinHandler} />
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