import React from 'react'
import style from './input.module.css'

import validateField from '../../../validators';

class InputField extends React.Component {
    id = Math.random() / 10000;

    constructor(props) {
        super(props);
        this.type = props.type || 'text';
        this.label = props.label || '';
        this.onChange = props.onChange;
        this.validators = props.validators;
        this.onValidate = props.onValidate;

        this.state = this.initState();
    }

    initState() {
        const data = {};

        data.isValid = true;
        data.error = { message: '' };
        data[this.id] = this.props?.value || '';

        return data
    }

    componentDidMount() {
        this.onChange(this.state[this.id]);

        if (!this.state[this.id]) {
            return
        }
        
        this.onBlurHandler();
    }

    validatorHandler(data = []) {
        if (!!data.length === false) {
            return
        }

        const verify = data.find(x => x.validate.isValid === false);
        const newState = { ...this.state };

        newState.isValid = !verify;
        newState.error = {
            message: verify?.validate.message
        }

        this.setState(newState);

        //return to the parent element information about validating result
        this.onValidate({ valid: !verify });
    }

    onChangeHandler(event, id) {
        this.setState(
            {
                [id]: event.target.value
            }
        )

        //return to the parent element input value
        this.onChange(event.target.value);
    }

    onBlurHandler = () => {
        //validating field and past the result for checking.

        if (!!this.validators?.length === false) {
            return
        }

        const results = validateField(this.state[this.id], this.validators);
        this.validatorHandler(results);
    }

    render() {
        return (
            <div className={style.input}>
                <input
                    className={this.state.isValid ? style['valid'] : style['invalid']}

                    id={this.id}
                    type={this.type}

                    onChange={event => this.onChangeHandler(event, this.id)}
                    onBlur={this.onBlurHandler}

                    defaultValue={this.props.value}
                />
                <label className={style.label} htmlFor={this.id}>{this.label}</label>
                <span className={style.span}>{this.state.error.message}</span>
            </div>
        )
    }
}

export default InputField