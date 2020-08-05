import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';

import ChangePasswordPanel from '../../components/profile-change-password/change-password';
import MyRooms from '../../components/profile-history-rooms/history-rooms';
import ProfileUpdate from '../../components/profile-update-form/profile-update-form';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.isLoading = false;
        this.state = {
            component: 'MyRooms',
        }
    }

    static contextType = UserContext;

    actionHandler(value = 'test') {
        console.log(value);
        this.setState({
            component: value || ''
        });
    }

    render() {
        const { user, logout } = this.context;

        return (
            <Common>
                <Wrapper>
                    <ProfileCard
                        data={user}
                        onClick={logout}
                        action={this.actionHandler}
                    />
                    {this.state.component === 'MyRooms' ? <MyRooms /> : null}
                    {this.state.component === 'MyRooms' ? <MyRooms /> : null}
                    {this.state.component === 'MyRooms' ? <MyRooms /> : null}
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    display: grid;
    padding: 2%;
    margin: 1em auto;
    grid-template-columns: 30% 69%;
    grid-gap: 1%;
`;

export default Profile