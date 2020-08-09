import React, { useContext } from 'react'
import style from './button.module.css';

import Contexts from '../../../Contexts';
const { UserContext } = Contexts();

const DefinedButton = ({ title = 'Default', action, theme = 'default' }) => {
    const context = useContext(UserContext);

    return (
        <button className={style['button_' + theme]} onClick={action} disabled={context.isLoading}>
            {title}
            <p>.</p>
        </button>
    )
}

export default DefinedButton