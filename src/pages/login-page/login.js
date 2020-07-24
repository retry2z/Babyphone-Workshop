import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';

class Login extends React.Component {

    form = [
        {
            type: 'email',
            name: 'email',
            label: 'Email: ',
        },
        {
            type: 'password',
            name: 'password',
            label: 'Password: ',
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
                    <FormControl fields={this.form} formAction={this.submitHandler} buttonTitle='Login' />

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