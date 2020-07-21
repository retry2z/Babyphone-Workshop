import React from 'react';

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
                <Title title='Register' />
                <form>
                    <InputField />
                    <DefinedButton />
                </form>
            </Common>
        )
    }
}

export default Register