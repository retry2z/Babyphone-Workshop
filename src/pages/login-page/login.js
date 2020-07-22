import React from 'react';
import style from './login.module.css'

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import InputField from '../../components/core/input/input';
import DefinedButton from '../../components/core/button/button';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    onChange = (event, field) => {
        const newState = {
            [field]: event.target.value
        }

        this.setState(newState);
    }

    render() {
        return (
            <Common>
                <Title title='Login' />
                <div className={style.box}>
                    <form>
                        <InputField
                            type='email'
                            placeholder='Email address: '
                            onChange={(event) => { this.onChange(event, 'email') }}
                        />
                        <InputField
                            type='password'
                            placeholder='Password: '
                            onChange={(event) => { this.onChange(event, 'password') }}
                        />
                        <DefinedButton title='Login' />
                    </form>
                </div>
            </Common>
        )
    }
}

export default Register