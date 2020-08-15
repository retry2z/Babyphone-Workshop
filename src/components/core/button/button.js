import React, { useContext } from 'react'
import style from './button.module.css';

import Contexts from '../../../Contexts';
const { UserContext } = Contexts();

const DefinedButton = ({ title = 'Default', action, theme = 'basic' }) => {
    const context = useContext(UserContext);

    const availableThemes = ['basic', 'stroked'];
    const currentTheme = availableThemes.includes(theme) ? theme : 'basic';

    return (
        <button
            className={style['button_' + currentTheme]}
            onClick={action === 'reset' ? null : action}
            type={action === 'reset' ? 'reset' : null}
            disabled={context.isLoading}
        >
            {title}
            <p className={style.loader}>.</p>
        </button>
    )
}

export default DefinedButton