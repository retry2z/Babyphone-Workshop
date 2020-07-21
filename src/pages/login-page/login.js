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
        }
    }

    componentDidMount = async () => {
    }

    render() {
        return (
            <Common>
                <Title title='Login' />
                <div className={style.box}>
                    <form>
                        <InputField id='email' label='Email: ' />
                        <InputField id='password' label='Password: ' />
                        <DefinedButton title='Login' />
                    </form>
                </div>
            </Common>
        )
    }
}

export default Register