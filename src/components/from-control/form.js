import React from 'react'
import style from './form.module.css';

import InputField from '../core/input/input';
import DefinedButton from '../core/button/button';

class FormControl extends React.Component {

    constructor(props) {
        super(props);

        this.fields = props.fields;
        this.buttonTitle = props.buttonTitle;
        this.formAction = props.formAction;
        this.validators = props.validators;

        this.state = this.initState;
    }

    get initState() {
        const data = {}
        this.fields.forEach((field) => {
            const name = field.name || 'default';
            data[name] = '';
        });

        return data
    }

    changeHandler = (event, field) => {
        const newState = {};

        newState[field] = event.target.value
        this.setState(newState);
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.formAction(this.state);
    }

    render() {
        return (
            <div className={style.box}>
                <form onSubmit={this.submitHandler}>
                    {
                        this.fields.map((field, index) => {
                            return (
                                <InputField
                                    key={index}
                                    type={field.type || 'text'}
                                    label={field.label || ''}
                                    onChange={event => this.changeHandler(event, field.name)}
                                    value={field.value}

                                    validators={
                                        [
                                            {
                                                validator: 'email',
                                                option: null,
                                                message: 'Wrong email'
                                            },
                                            {
                                                validator: 'maxLength',
                                                option: 6,
                                                message: 'Input date extended'
                                            },
                                        ]}
                                        
                                />
                            )
                        })
                    }
                    <DefinedButton title={this.buttonTitle} />
                </form>
            </div>
        )
    }
}

export default FormControl