import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';

import ChangePassword from '../../components/profile-change-password/change-password';
import MyRooms from '../../components/profile-history-rooms/history-rooms';
import UserSettings from '../../components/profile-update-form/profile-update-form';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            component: 'UserSettings',
        }
    }

    static contextType = UserContext;

    actionHandler = (value = 'UserSettings') => {
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
                            onClick={logout}
                            action={this.actionHandler}
                        />
                    </Side>
                    <Main>
                        {this.state.component === 'MyRooms' ? <MyRooms /> : null}
                        {this.state.component === 'UserSettings' ? <UserSettings /> : null}
                        {this.state.component === 'ChangePassword' ? <ChangePassword /> : null}
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