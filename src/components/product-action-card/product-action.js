import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import FormControl from '../from-control/form';
import Title from '../core/title/title';
import productService from '../../services/product-service';
import SpeechPanel from '../speech-detector/speech';

import Contexts from '../../Contexts';
const { UserContext } = Contexts();

const ProductActionCard = (props) => {
    const { id } = props;
    const history = useHistory();
    const context = useContext(UserContext);
    const keyWords = !!props.data.keyWords ? props.data.keyWords : [];

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
            value: keyWords.join(' '),
            validators: [
                {
                    type: 'minLength',
                    param: 2,
                    message: 'Key word should be more than 2 letters'
                },
                {
                    type: 'onlyLettersAndDigits',
                    message: 'Only letters and digits are allowed'
                }
            ],
        },
    ]


    const submitHandler = async (value) => {
        context.loadingToggle();
        const data = await productService.edit(id, value);

        if (data.isValid) {
            context.loadingToggle();
            history.push('/' + id);
        } else {
            context.loadingToggle();
            history.push('/error');
        }
    }

    return (
        <Wrapper>
            <SpeechPanel id={id} />
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

