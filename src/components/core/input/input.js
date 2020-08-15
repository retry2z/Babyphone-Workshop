import React from 'react'
import style from './input.module.css'

import validateField from '../../../validators';

class InputField extends React.Component {
    id = Math.random() / 10000;

    constructor(props) {
        super(props);
        this.type = props.type || 'text';
        this.name = props.name || false;
        this.label = props.label || '';
        this.onChange = props.onChange; //call parent with typed data
        this.onBlur = props.onBlur; //call parent with validated date
        this.forceValidate = props.forceValidate || false;
        this.validators = props.validators;

        this.state = this.initState();
    }

    initState() {
        const data = {};

        data.isValid = true;
        data.error = { message: '' };
        data[this.name || this.id] = this.props?.value || '';

        return data
    }

    componentDidMount() {
        if (!this.forceValidate) {
            return
        }

        this.forceValidate(this.onBlurHandler);       //call parent with validated date
        this.onChange(this.state[this.id]);
        if (!this.state[this.id]) {
            return
        }

        this.onBlurHandler();
    }

    onChangeHandler(event, id) {
        this.setState(
            {
                [id]: event.target.value
            }
        )

        //return to the parent element input value
        this.onChange(event.target.value, event);
    }

    onBlurHandler = () => {
        //validating field and past the result for checking.

        if (!!this.validators?.length === false) {
            return
        }

        const results = validateField(this.state[this.id], this.validators);
        const verify = results.find(x => x.validate.isValid === false);
        const newState = { ...this.state };

        newState.isValid = !verify;
        newState.error = {
            message: verify?.validate.message
        }

        this.setState(newState);

        //return to the parent element information about validating result
        this.onBlur({ valid: !verify });
    }

    render() {
        return (
            <div className={style.input}>
                <input
                    className={this.state.isValid ? style['valid'] : style['invalid']}

                    placeholder=' '

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