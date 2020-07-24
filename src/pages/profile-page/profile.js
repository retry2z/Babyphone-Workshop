import React from 'react';
import style from './profile.module.css'

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';
import InformationPanel from '../../components/information-panel/information-panel';
import FormControl from '../../components/from-control/form';
import ProductCard from '../../components/product-card/card';

class Profile extends React.Component {
    form = [
        {
            type: 'password',
            placeholder: 'Current password: ',
            onChange: event => this.changeHandler(event, 'password'),
        },
        {
            type: 'password',
            placeholder: 'New password: ',
            onChange: event => this.changeHandler(event, 'newPassword'),
        },
        {
            type: 'password',
            placeholder: 'Re-password: ',
            onChange: event => this.changeHandler(event, 'rePassword'),
        },
    ]


    constructor(props) {
        super(props);

        this.state = {
            data: <ProductCard />,
            password: '',
            newPassword: '',
            rePassword: '',
        }
    }

    changeHandler = (event, field) => {
        const newState = {
            ...this.state,
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
                <div className={style.profile}>
                    <div className={style.card}>
                        <ProfileCard />
                    </div>
                    <div className={style.formPanel}>
                        <FormControl fields={this.form} formAction={this.submitHandler} buttonTitle='Save' />

                    </div>
                </div>
                <InformationPanel title='3 of your recent posts'>{this.state.data}</InformationPanel>
            </Common>
        )
    }
}

export default Profile