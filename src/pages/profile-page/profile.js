import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';
import MyRooms from '../../components/profile-history-rooms/history-rooms';



import Contexts from '../../Contexts';
const { UserContext } = Contexts();


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            component: <MyRooms />,
        }
    }

    static contextType = UserContext;

    actionHandler = (value) => {
        const newState = { ...this.state };
        newState.component = value;
        this.setState(newState);
    }

    render() {
        const { user, logout } = this.context;

        return (
            <Common>
                <Wrapper>
                    <Side>
                        <ProfileCard
                            data={user}
                            buttonOnClick={logout}
                            menuAction={this.actionHandler}
                        />
                    </Side>
                    <Main>
                        {this.state.component}
                    </Main>
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    display: grid;
    padding: 2%;
    margin: 1em auto;
    grid-template-columns: 30% 65%;
    grid-gap: 5%;
`;

const Side = styled.section`
    height:10vh;
`;

const Main = styled.section`
    width:80%;
    align-self:end;
`;

export default Profile