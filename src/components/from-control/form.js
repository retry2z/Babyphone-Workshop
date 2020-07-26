import React from 'react'
import style from './form.module.css';

import InputField from '../core/input/input';
import DefinedButton from '../core/button/button';
import ErrorField from '../core/errorField/errorField';

class FormControl extends React.Component {

    constructor(props) {
        super(props);
        this.shouldBeValidated = false;

        this.fields = props.fields;
        this.buttonTitle = props.buttonTitle;
        this.formAction = props.formAction;

        this.state = this.initState();
    }

    initState() {
        const data = {};
        const validFields = {};

        this.fields.forEach(
            ({ name = 'default', validators = [] }) => {
                data[name] = '';
                validFields[name] = null;

                if (!!validators.length) this.shouldBeValidated = true;
            });

        return {
            data,
            validFields,
            isValid: false,
            errorMessage: '',
        }
    }

    onChangeHandler = (event, field) => {
        const newState = { ...this.state };

        newState.data[field] = event.target.value;
        newState.errorMessage = '';
        this.setState(newState);
    }

    onValidateHandler = (isValid = null, fieldName) => {
        if (isValid === null) {
            return
        }

        const isValidForm = () => {
            const data = JSON.stringify(this.state.validFields);

            if (data.includes('false') || data.includes('null')) {
                return false
            }

            return true
        }

        const newState = { ...this.state };

        newState.validFields[fieldName] = isValid;
        newState.isValid = isValidForm();
        this.setState(newState);
        this.isValidated = true;
    }


    submitHandler = (event) => {
        event.preventDefault();

        if (!this.state.isValid && this.shouldBeValidated) {
            const newState = { ...this.state };
            newState.errorMessage = 'Form contain invalid fields';
            this.setState(newState);

            return
        }

        this.formAction(this.state.data);
    }

    render() {
        return (
            <div className={style.box}>
                <form onSubmit={this.submitHandler}>
                    {this.state.errorMessage ? <ErrorField message={this.state.errorMessage} /> : null}

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