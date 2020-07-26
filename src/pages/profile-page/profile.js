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
            name: 'password',
            label: 'Current Password:',
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
            name: 'password',
            label: 'New Password:',
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


    constructor(props) {
        super(props);

        this.state = {
            data: <ProductCard />,
        }
    }


    submitHandler = (value) => {
        console.log(value);
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