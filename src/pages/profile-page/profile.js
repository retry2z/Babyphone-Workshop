import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';

import MyRooms from '../../components/profile-history-rooms/history-rooms';
import ChangePassword from '../../components/profile-change-password/change-password';
import UserSettings from '../../components/profile-update-form/profile-update-form';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();


class Profile extends React.Component {
    active = new URLSearchParams(this.props.location.search).get('active');

    userMenuOptions = {
        MyRooms: <MyRooms />,
        UserSettings: <UserSettings />,
        ChangePassword: <ChangePassword />,
    };

    constructor(props) {
        super(props);
        this.state = {
            component: '',
            name: '',
        }
    }

    static contextType = UserContext;

    componentDidMount = () => {
        const newState = { ...this.state };
        if (!!this.userMenuOptions[this.active]) {
            newState.component = this.userMenuOptions[this.active];
            newState.name = this.active;

        } else {
            newState.component = <MyRooms />
            newState.name = 'MyRooms'
        }
        this.setState(newState);
    }

    optionComponentHandle = (value) => {
        const newState = { ...this.state };
        newState.component = this.userMenuOptions[value];
        newState.name = value;

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
                            activeMenu={this.state.name}
                            componentMenu={this.optionComponentHandle}
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
    margin: 1em auto;
    margin-top:3em;
    display: grid;
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