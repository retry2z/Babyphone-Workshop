import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';

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


    submitHandler = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Common>
                <Title title='Login' />
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