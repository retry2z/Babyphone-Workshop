import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProductCard from '../../components/product-card/card';
import NotificationCard from '../../components/notification-card/notification-card';
import productService from '../../services/product-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.isAuthor = false;
        this.state = {
            data: {}
        }
    }

    static contextType = UserContext;

    componentDidMount = async () => {
        const { match: { params } } = this.props;

        try {
            const { data } = await productService.get(params.id);

            if (this.context.user !== null) {
                this.isAuthor = data.author === this.context?.user.uid;
            }

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
                    <ProductCard data={this.state.data} onJoinHandler={this.onJoinHandler} owner={this.isAuthor} />
                    <NotificationCard />
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