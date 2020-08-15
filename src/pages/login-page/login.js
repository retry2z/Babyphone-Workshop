import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';

import authService from '../../services/auth-service';
import Contexts from '../../Contexts';
const { UserContext } = Contexts();

class Login extends React.Component {

    form = [
        {
            name: 'email',
            label: 'Email:',
            validators: [
                {
                    type: 'email',
                    message: 'Please enter a valid email address'
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
        {
            type: 'password',
            name: 'password',
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
    ]

    static contextType = UserContext;


    submitHandler = async (value) => {
        this.context.loadingToggle();
        const response = await authService.login(value);


        if (!response.isValid) {
            this.context.loadingToggle();
            return response.error;
        } else {
            this.context.loadingToggle();
            this.context.login(response.data);
            this.props.history.push('/');
            return false
        }
    }

    render() {
        return (
            <Common>
                <Wrapper>
                    <Title title='Welcome' />
                    <FormControl
                        fields={this.form}
                        fromSubmit={{
                            title: 'Login',
                            action: this.submitHandler,
                        }}
                    />
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    margin: 1em auto;
    margin-top:3em;
    width: 45%;
`;

export default Login