import React from 'react'


const UserContext = React.createContext({
    isLoading: false,
    isLogged: false,
    user: null,
    login: () => { },
    logout: () => { },
    loadingToggle: () => { },
})

const Contexts = () => {
    return {
        UserContext
    }
}

export default Contexts