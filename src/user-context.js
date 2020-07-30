import React from 'react'
import Contexts from './Contexts'
import cookieAdmin from './cookie';

const cookieHandler = cookieAdmin();
const { UserContext } = Contexts();

class ContextContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogged: false,
      user: null
    }
  }

  login = (user) => {

  }

  logout = () => {
  }

  componentDidMount() {
    const token = cookieHandler.get() || '';

    if (!!token.length === false) {
      return
    }

    

  }

  render() {
    const { isLogged, user } = this.state

    return (
      <UserContext.Provider
        value={{
          isLogged,
          user,
          login: this.login,
          logout: this.logout
        }}>

        {this.props.children}

      </UserContext.Provider>
    )
  }
}

export default ContextContainer