import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';

class Register extends React.Component {

    form = [
        {
            type: 'email',
            name: 'email',
            label: 'Email: ',
            validators: [
                {
                    type: 'email',
                    param: null,
                    message: 'Wrong email'
                },
                {
                    type: 'maxLength',
                    param: 6,
                    message: 'Input date extended'
                },
            ],
        },
        {
            type: 'password',
            name: 'password',
            label: 'Password: ',
            validators: [
                {
                    type: 'maxLength',
                    param: 6,
                    message: 'Input date extended'
                },
            ],
        },
        {
            type: 'password',
            name: 'rePassword',
            label: 'Re-Password: ',

        },
    ]


    submitHandler = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Common>
                <Title title='Register' />
                <Wrapper>
                    <FormControl fields={this.form} formAction={this.submitHandler} buttonTitle='Register' />

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