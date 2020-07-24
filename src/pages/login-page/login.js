import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';


class Login extends React.Component {

    form = [
        {
            type: 'email',
            placeholder: 'Email: ',
            onChange: event => this.changeHandler(event, 'email'),
        },
        {
            type: 'password',
            placeholder: 'Password: ',
            onChange: event => this.changeHandler(event, 'password'),
        },
    ]

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    changeHandler = (event, field) => {
        const newState = {
            [field]: event.target.value
        }

        this.setState(newState);
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
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