import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';
import FormControl from '../../components/from-control/form';

import userService from '../../services/user-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();


class Profile extends React.Component {
    fields = [
        {
            type: 'password',
            name: 'password',
            label: 'Current password:',
            validators: [
                {
                    type: 'minLength',
                    param: 8,
                    message: 'Password must be at least 8 symbols',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
        {
            type: 'password',
            name: 'newPassword',
            label: 'Password:',
            validators: [
                {
                    type: 'minLength',
                    param: 8,
                    message: 'Password must be at least 8 symbols',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
        {
            type: 'password',
            name: 'rePassword',
            label: 'Re-Password:',
            validators: [
                {
                    type: 'minLength',
                    param: 8,
                    message: 'Password must be at least 8 symbols',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
    ]

    validators = [
        {
            type: 'passwordMatch',
            param: ['newPassword', 'rePassword'],
            message: 'Passwords are not equals',
        }
    ]

    constructor(props) {
        super(props);
        this.isLoading = false;

        this.state = {
        }
    }

    static contextType = UserContext;

    submitHandler = async (value) => {
        if (this.isLoading) {
            return
        }

        this.isLoading = true;
        const response = await userService.changePassword(value);
        this.isLoading = false;

        if (!response.isValid) {
            return response.error
        } else {
            this.props.history.push('/');
            return false
        }
    }

    render() {
        const { user, logout } = this.context;

        return (
            <Common>
                <Wrapper>
                    <ProfileCard data={user} onClick={logout} />

                    <FormControl
                        fields={this.fields}
                        validators={this.validators}
                        formAction={this.submitHandler}
                        buttonTitle='Save'
                    />
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    display: grid;
    padding: 2%;
    margin: 0 auto;
    grid-template-columns: 45% 45%;
    grid-gap: 5%;
    padding-left: 5%;
    padding-bottom: 5%;
`;


export default Profile