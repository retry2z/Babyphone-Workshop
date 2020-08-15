import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from '../from-control/form';
import Title from '../core/title/title';
import userService from '../../services/user-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

const ChangePasswordPanel = () => {
    const fields = [
        {
            type: 'password',
            name: 'password',
            label: 'Current password:',
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
            name: 'newPassword',
            label: 'Password:',
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

    const validators = [
        {
            type: 'passwordMatch',
            param: ['newPassword', 'rePassword'],
            message: 'Passwords are not equals',
        }
    ]

    const context = useContext(UserContext);
    const history = useHistory();

    const submitHandler = async (value) => {
        context.loadingToggle();
        const response = await userService.changePassword(value);

        if (!response.isValid) {
            context.loadingToggle();
            return response.error;
        } else {
            history.push('/');
            context.loadingToggle();
            return false
        }
    }

    return (
        <>
            <Title title='Change password' />

            <FormControl
                fields={fields}
                validators={validators}
                fromSubmit={{
                    title: 'Change',
                    action: submitHandler,
                }}
                fromReset={{
                    title: 'Reset',
                    type: 'reset',
                }}
            />
        </>
    )
}

export default ChangePasswordPanel