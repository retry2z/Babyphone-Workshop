import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';

import authService from '../../services/auth-service';

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

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }
    }


    submitHandler = async (value) => {
        if (this.state.isLoading) {
            return
        }

        await this.setState({
            isLoading: true,
        });

        const response = await authService.login(value);

        this.setState({
            isLoading: false,
        });

        if (!response.isValid) {
            return response.error
        } else {
            this.props.history.push('/');
            return false
        }
    }

    render() {
        return (
            <Common>
                <Title title='Welcome' />
                <Wrapper>
                    <FormControl
                        fields={this.form}
                        formAction={this.submitHandler}
                        buttonTitle='Login'
                    />
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    margin: 1em auto;
    width: 45%;
`;

export default Login