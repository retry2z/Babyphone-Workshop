import React from 'react'
import style from './form.module.css';

import InputField from '../core/input/input';
import DefinedButton from '../core/button/button';
import ErrorField from '../core/errorField/errorField';

import validateGroup from '../../validators';

class FormControl extends React.Component {

    constructor(props) {
        super(props);
        this.validators = props.validators || [];
        this.shouldBeValidated = false && !!this.validators.length;
        this.errorMessage = '';

        this.fields = props.fields;
        this.buttonTitle = props.buttonTitle;
        this.formAction = props.formAction;
        this.theme = props.theme;

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
    }


    submitHandler = async (event) => {
        event.preventDefault();

        if (!this.shouldBeValidated) {
            return this.formAction(this.state.data);
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
        const isThereErrorMessage = await this.formAction(this.state.data);
        if (!!isThereErrorMessage) {
            const newState = { ...this.state };
            newState.isValid = false;
            newState.showError = true;
            this.setState(newState);

            this.errorMessage = isThereErrorMessage;
        }
    }

    render() {
        return (
            <div className={style.box}>
                <form onSubmit={this.submitHandler}>
                    {this.state.showError ? <ErrorField message={this.errorMessage} /> : null}

                    {
                        this.fields.map((field, index) => {
                            return (
                                <InputField
                                    key={index}
                                    type={field.type}
                                    label={field.label}
                                    onChange={event => this.onChangeHandler(event, field.name)}
                                    validators={field.validators}
                                    onValidate={isValid => this.onValidateHandler(isValid, field.name)}
                                    value={field.value}
                                />
                            )
                        })
                    }
                    <DefinedButton title={this.buttonTitle} theme={this.theme} />
                </form>
            </div>
        )
    }
}

export default FormControl