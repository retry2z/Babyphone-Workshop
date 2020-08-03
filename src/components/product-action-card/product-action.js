import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import FormControl from '../from-control/form';
import Title from '../core/title/title';
import productService from '../../services/product-service';

const ProductActionCard = (props) => {
    const { id } = props;
    const history = useHistory();

    const form = [
        {
            name: 'title',
            label: 'Room name:',
            value: props.data.title,
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
            value: props.data.keyWords.join(' '),
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
        const data = await productService.edit(id, value);

        if (data.isValid) {
            history.push('/');
        }
    }

    return (
        <Wrapper>
            <Title title='Update room' />
            <FormControl
                fields={form}
                formAction={submitHandler}
                buttonTitle='Save'
            />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width:100%;
    padding: 2%;
    margin: 0 auto;
`;

export default ProductActionCard

