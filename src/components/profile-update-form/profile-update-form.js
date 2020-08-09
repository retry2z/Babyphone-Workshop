import React, { useContext } from 'react';
import styled from 'styled-components';

import FormControl from '../from-control/form';
import Title from '../core/title/title';
import userService from '../../services/user-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

const ProfileUpdate = () => {
    const context = useContext(UserContext);

    const form = [
        {
            name: 'name',
            label: 'Display name:',
            value: context.user.name,
            validators: [
                {
                    type: 'minLength',
                    param: 4,
                    message: 'Name have to be more than 4 letters'
                },
                {
                    type: 'onlyLettersAndDigits',
                    message: 'Only letters and digits are allowed'
                }
            ],
        },
        {
            name: 'imageUrl',
            label: 'Profile image:',
            value: context.user.imageUrl,
            validators: [
                {
                    type: 'minLength',
                    param: 6,
                    message: 'length should be more than 6 letters'
                },
            ],
        },
    ]


    const submitHandler = async (value) => {
        context.loadingToggle();
        const response = await userService.update(value);

        if (response.isValid) {
            context.login(response.data.data)
            context.loadingToggle();
        }
    }

    return (
        < Wrapper >
            <Title title='User settings' />
            <FormControl
                fields={form}
                formAction={submitHandler}
                buttonTitle='Update'
            />
        </Wrapper >
    )
}

const Wrapper = styled.section`
    width:100%;
    padding: 2%;
    margin: 0 auto;
`;

export default ProfileUpdate

