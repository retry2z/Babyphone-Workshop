import React, { useContext, useEffect } from 'react'

import Contexts from '../../Contexts';
import { Redirect } from 'react-router-dom';
const { UserContext } = Contexts();

const LogoutPage = () => {
    const context = useContext(UserContext);

    useEffect(() => {
        context.logout();
    });

    return (
        <Redirect to='/' />
    )
}

export default LogoutPage;

