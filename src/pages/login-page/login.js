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

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }
    }

    isLoading = false;

    static contextType = UserContext;


    submitHandler = async (value) => {
        if (this.isLoading) {
            return
        }

        this.isLoading = true;
        const response = await authService.login(value);
        this.isLoading = false;
        
        
        if (!response.isValid) {
            return response.error
        } else {
            this.context.login(response.data);
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