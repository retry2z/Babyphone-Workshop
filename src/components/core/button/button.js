import React, { useContext } from 'react'
import style from './button.module.css';

import Contexts from '../../../Contexts';
const { UserContext } = Contexts();

const DefinedButton = (
    {
        action,
        title = 'Default',
        theme = 'basic',
        type = 'submit',
    }) => {
    const context = useContext(UserContext);

    const availableThemes = ['basic', 'stroked'];
    const currentTheme = availableThemes.includes(theme) ? theme : 'basic';

    return (
        <button
            className={style['button_' + currentTheme]}
            type={type}
            disabled={context.isLoading}

            onClick={(e) => {
                if (!!action) {
                    e.preventDefault();
                    action();
                }
                return
            }}
        >
            {title}
            <p className={style.loader}>.</p>
        </button>
    )
}

export default DefinedButton