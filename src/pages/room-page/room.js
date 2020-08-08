import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProductCard from '../../components/product-card/card';
import NotificationCard from '../../components/notification-card/notification-card';
import ProductActionCard from '../../components/product-action-card/product-action';
import productService from '../../services/product-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.isAuthor = null;
        this.state = {
            data: {},
            isJoined: null,
        }
    }

    static contextType = UserContext;

    componentDidMount = async () => {
        const { match: { params } } = this.props;

        try {
            const { data } = await productService.get(params.id);

            if (this.context.user !== null) {
                this.isAuthor = data.author === this.context?.user.uid;
            } else {
                this.isAuthor = false;
            }

            const newState = { ...this.state };
            newState.data = data;
            this.setState(newState);
        }
        catch (e) {
            this.props.history.push('/error');
        }
    }

    onJoinHandler = (isJoined) => {
        if (this.isAuthor) {
            return
        }
        const newState = { ...this.state };
        newState.isJoined = isJoined;
        this.setState(newState);
    }

    render() {
        if (this.isAuthor === null) {
            return (
                <Common>
                    <Wrapper>
                        <h2>Loading...</h2>
                    </Wrapper>
                </Common>
            )
        }
        return (
            <Common>
                <Wrapper>
                    <ProductCard data={this.state.data} onJoinHandler={this.onJoinHandler} owner={this.isAuthor} />
                    {
                        this.isAuthor ?
                            <ProductActionCard data={this.state.data} id={this.props.match.params.id} /> :
                            <NotificationCard data={this.state.data} id={this.props.match.params.id} isJoined={this.state.isJoined} />
                    }
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    margin: 1em auto;
    margin-top:3em;
    display: grid;
    grid-template-columns: 28% 62%;
    grid-gap: 10%;
`;


export default Room