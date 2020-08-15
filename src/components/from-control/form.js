import React from 'react'
import style from './form.module.css';

import InputField from '../core/input/input';
import DefinedButton from '../core/button/button';
import ErrorField from '../core/errorField/errorField';

import validateGroup from '../../validators';

class FormControl extends React.Component {
    errorMessage = '';
    forceValidate = [];

    constructor(props) {
        super(props);
        this.theme = props.theme;

        this.validators = props.validators || [];
        this.shouldBeValidated = false && !!this.validators.length;

        this.fields = props.fields;

        this.fromSubmit = props.fromSubmit || null;
        this.fromReset = props.fromReset || null;

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

    onChangeHandler = (value, field) => {
        const newState = { ...this.state };
        newState.data[field] = value;
        newState.showError = false;

        this.setState(newState);
    }

    onBlurHandler = (isValid = null, fieldName) => {
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
    }


    submitHandler = async () => {
        await this.forceValidate.forEach(forceValidateField => forceValidateField());

        if (!this.shouldBeValidated) {
            return this.fromSubmit.action(this.state.data);
        }

        const groupResults = validateGroup(this.state.data, this.validators);
        const groupVerify = groupResults.find(x => x.validate.isValid === false);

        if (groupVerify || !this.state.isValid) {
            const newState = { ...this.state };
            this.errorMessage = groupVerify?.validate.message || 'Form contain invalid fields';
            newState.showError = true;
            this.setState(newState);

            return
        }

        //Invoke submit function from parent and await if Its returns a message to show as error
        const isThereErrorMessage = await this.fromSubmit.action(this.state.data);
        if (!!isThereErrorMessage) {
            this.errorMessage = isThereErrorMessage;
            const newState = { ...this.state };
            newState.isValid = false;
            newState.showError = true;
            this.setState(newState);
        }
    }

    render() {
        return (
            <div className={style.box}>
                <form>
                    {this.state.showError ? <ErrorField message={this.errorMessage} /> : null}

                    {
                        this.fields.map((field, index) => {
                            return (
                                <InputField
                                    key={index}
                                    type={field.type}
                                    label={field.label}
                                    validators={field.validators}
                                    onChange={event => this.onChangeHandler(event, field.name)}
                                    onBlur={isValid => this.onBlurHandler(isValid, field.name)}
                                    forceValidate={ref => this.forceValidate.push(ref)}
                                    value={field.value}
                                />
                            )
                        })
                    }
                    <div className={style.fromActions}>
                        {
                            !!this.fromSubmit ?
                                <DefinedButton
                                    theme={this.fromSubmit.theme || 'basic'}
                                    title={this.fromSubmit.title}
                                    action={this.submitHandler}
                                />
                                : null
                        }
                        {
                            !!this.fromReset ?
                                <DefinedButton
                                    theme={this.fromReset.theme || 'stroked'}
                                    title={this.fromReset.title}
                                    type={this.fromReset.type}
                                    action={this.fromReset.action}
                                />
                                : null
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default FormControl