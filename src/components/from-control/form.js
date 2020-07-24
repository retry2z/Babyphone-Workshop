import React from 'react'
import style from './form.module.css';

import InputField from '../core/input/input';
import DefinedButton from '../core/button/button';

const FormControl = ({ fields, buttonTitle, formAction }) => {

    return (
        <div className={style.box}>
            <form onSubmit={formAction}>
                {
                    fields.map((field, index) => {
                        return (
                            <InputField
                                key={index}
                                type={field.type}
                                placeholder={field.placeholder}
                                onChange={field.onChange}
                            />
                        )
                    })
                }
                <DefinedButton title={buttonTitle} />
            </form>
        </div>
    )
}

export default FormControl