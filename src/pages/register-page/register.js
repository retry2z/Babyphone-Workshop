import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';

class Register extends React.Component {

    fields = [
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
            param: ['password', 'rePassword'],
            message: 'Passwords are not equals',
        }
    ]


    submitHandler = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Common>
                <Title title='Welcome' />
                <Wrapper>
                    <FormControl
                        fields={this.fields}
                        validators={this.validators}
                        formAction={this.submitHandler}
                        buttonTitle='Register'
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

export default Register