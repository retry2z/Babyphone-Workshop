import React from 'react'
import style from './information-panel.module.css';

const InformationPanel = ({ title, children }) => {

    return (
        <div className={style.information}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default InformationPanel