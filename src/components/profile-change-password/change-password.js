import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from '../from-control/form';
import userService from '../../services/user-service';

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

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();


    const submitHandler = async (value) => {
        if (isLoading) {
            return
        }

        setIsLoading(true);
        const response = await userService.changePassword(value);
        setIsLoading(false);

        if (!response.isValid) {
            return response.error
        } else {
            history.push('/');
            return false
        }
    }

    return (
        <FormControl
            fields={fields}
            validators={validators}
            formAction={submitHandler}
            buttonTitle='Change password'
        />
    )
}

export default ChangePasswordPanel