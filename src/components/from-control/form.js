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

        this.state = this.initState();
    }

    initState() {
        const data = {};
        const form = {};

        this.fields.forEach((field) => {
            const name = field.name || 'default';
            data[name] = '';
            form[name] = null;
        });

        return { data, form, isValid: false }
    }

    onChangeHandler = (event, field) => {
        const newState = { ...this.state };

        newState.data[field] = event.target.value;
        this.setState(newState);
    }

    onValidateHandler = (isValid, field) => {
        const newState = { ...this.state };

        newState.form[field] = isValid;
        newState.isValid = this.isValidForm();
        this.setState(newState);
    }

    isValidForm() {
        const data = JSON.stringify(this.state.form);

        if (data.includes('false') || data.includes('null')) {
            return false
        }

        return true
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (!this.state.isValid) {
            return console.log('Invalid Form');
        }

        this.formAction(this.state.data);
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
                                    onChange={event => this.onChangeHandler(event, field.name)}
                                    validators={field.validators || []}
                                    onValidate={isValid => this.onValidateHandler(isValid, field.name)}
                                    value={field.value}
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