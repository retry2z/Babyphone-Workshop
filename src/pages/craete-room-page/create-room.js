import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Title from '../../components/core/title';
import FormControl from '../../components/from-control/form';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();


const CreateRoom = () => {
    const fields = [
        {
            name: 'title',
            label: 'Room name:',
            validators: [
                {
                    type: 'minLength',
                    param: 4,
                    message: 'The name of the room should be at least 4 letters',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
        {
            name: 'keyWords',
            label: 'Key words: ',            
        },
    ]

    const submitHandler = (value) => {
        console.log(value);
    }

    return (
        <Common>
            <Wrapper>
                <Title title='Create a new room' />
                <FormControl
                    fields={fields}
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
`;


export default CreateRoom