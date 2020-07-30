import React from 'react'


const UserContext = React.createContext({
    loggedIn: false,
    user: null,
    logIn: () => { },
    logOut: () => { },
})

const Contexts = () => {
    return {
        UserContext
    }
}

export default Contexts