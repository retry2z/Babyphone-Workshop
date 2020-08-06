import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';

import Contexts from '../Contexts';
const { UserContext } = Contexts();

const AuthGuard =
    ({
        path,
        component,
        authorization = false,
        redirect = '/',
        exact = false,
        validate = true,
    }) => {

        const context = useContext(UserContext);

        if (!validate || context.isLogged === authorization) {
            return (
                <Route
                    exact={exact}
                    path={path}
                    component={component}
                />
            )
        } else {
            return <Redirect to={redirect} />
        }

    }

export default AuthGuard