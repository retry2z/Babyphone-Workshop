import React, { useContext } from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';
import productService from '../../services/product-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

const CreateRoom = (props) => {
    const context = useContext(UserContext);

    const form = [
        {
            name: 'title',
            label: 'Room name:',
            validators: [
                {
                    type: 'minLength',
                    param: 4,
                    message: 'Name have to be more than 4 letters'
                },
                {
                    type: 'onlyLettersAndDigits',
                    message: 'Only letters and digits are allowed'
                },
                {
                    type: 'required',
                    message: 'The field is required'
                },
            ],
        },
        {
            name: 'keyWords',
            label: 'Key Words:',
            validators: [
                {
                    type: 'minLength',
                    param: 2,
                    message: 'Key word should be more than 2 letters'
                },
            ],
        },
    ];

    const submitHandler = async (value) => {
        context.loadingToggle();
        const response = await productService.post(value);

        if (!response.isValid) {
            context.loadingToggle();
            return response.error
        } else {
            context.loadingToggle();
            props.history.push('/');
            return false
        }
    }

    return (
        <Common>
            <Wrapper>
                <Title title='Create a new room' />
                <FormControl
                    fields={form}
                    fromSubmit={{
                        title: 'Create',
                        action: submitHandler,
                    }}
                    fromReset={{
                        title: 'Reset',
                        type: 'reset',
                    }}
                />
            </Wrapper>
        </Common>
    )
}


const Wrapper = styled.section`
    margin: 1em auto;
    margin-top:3em;
    width:55%
`;


export default CreateRoom