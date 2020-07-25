import React from 'react'
import style from './input.module.css'

import validateField from '../../../validators';

class InputField extends React.Component {
    id = Math.random() / 10000;

    constructor(props) {
        super(props);
        this._isValid = [];
        this.type = props.type;
        this.label = props.label;
        this.onChange = props.onChange;
        this.validators = props.validators;
        this.value = props.value;
        this.onValidate = props.onValidate;

        this.state = {
            isValid: true,
            error: {
                message: ''
            },
            [this.id]: ''
        }
    }

    set _isValid(data) {
        const test = data.find(x => x.validate.isValid === false);

        if (data.length) {
            this.setState(
                {
                    ...this.state,
                    isValid: !test,
                    error: {
                        message: test?.validate.message || ''
                    }
                }
            )
            this.onValidate({ valid: !test });
        }
    }

    changeHandler(event, id) {
        this.setState(
            {
                [id]: event.target.value
            }
        )
        this.onChange(event);
    }

    render() {
        return (
            <div className={style.input}>
                <input
                    className={this.state.isValid ? style['valid'] : style['invalid']}
                    id={this.id}
                    type={this.type}
                    onChange={event => this.changeHandler(event, this.id)}
                    onBlur={
                        () => this._isValid = validateField(this.state[this.id], this.validators)
                    }
                    value={this.value}
                />
                <label className={style.label} htmlFor={this.id}>{this.label}</label>
                <span className={style.span}>{this.state.error.message}</span>
            </div>
        )
    }

}

export default InputField