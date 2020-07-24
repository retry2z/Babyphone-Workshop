import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';


class Register extends React.Component {

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
        {
            type: 'password',
            placeholder: 'Re-Password: ',
            onChange: event => this.changeHandler(event, 'rePassword'),
        },
    ]

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rePassword: '',
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