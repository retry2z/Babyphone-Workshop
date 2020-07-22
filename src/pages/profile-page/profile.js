import React from 'react';
import style from './profile.module.css'

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';
import InformationPanel from '../../components/information-panel/information-panel';
import InputField from '../../components/core/input/input';
import DefinedButton from '../../components/core/button/button';
import ProductCard from '../../components/product-card/card';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: <ProductCard />,
        }
    }


    render() {
        return (
            <Common>
                <div className={style.profile}>
                    <div className={style.card}>
                        <ProfileCard />
                    </div>
                    <div className={style.formPanel, style.box}>
                        <form>
                            <InputField
                                type='text'
                                placeholder='Name: '
                                onChange={(event) => { this.onChange(event, 'name') }}
                            />
                            <InputField
                                type='password'
                                placeholder='Current password: '
                                onChange={(event) => { this.onChange(event, 'password') }}
                            />
                            <InputField
                                type='password'
                                placeholder='New password: '
                                onChange={(event) => { this.onChange(event, 'newPassword') }}
                            />
                            <InputField
                                type='password'
                                placeholder='Repeat password: '
                                onChange={(event) => { this.onChange(event, 'rePassword') }}
                            />
                            <DefinedButton title='Save' />

                        </form>
                    </div>
                </div>
                <InformationPanel title='3 of your recent posts'>{this.state.data}</InformationPanel>
            </Common>
        )
    }
}

export default Profile