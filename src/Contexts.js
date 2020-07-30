import React from 'react'


const UserContext = React.createContext({
    isLogged: false,
    user: null,
    login: () => { },
    logout: () => { },
})

const Contexts = () => {
    return {
        UserContext
    }
}

export default Contexts