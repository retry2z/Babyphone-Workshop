import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import FormControl from '../../components/from-control/form';
import productService from '../../services/product-service';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();


const CreateRoom = (props) => {
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
                }
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
    ]


    const submitHandler = async (value) => {
        const data = await productService.post(value);

        if (data.isValid) {
            props.history.push('/');
        }
    }

    return (
        <Common>
            <Wrapper>
                <Title title='Create a new room' />
                <FormControl
                    fields={form}
                    formAction={submitHandler}
                    buttonTitle='Save'
                />
            </Wrapper>
        </Common>
    )
}


const Wrapper = styled.section`
    padding: 2%;
    margin: 0 auto;
    width:55%
`;


export default CreateRoom