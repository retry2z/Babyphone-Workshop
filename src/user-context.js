import React from 'react'
import Contexts from './Contexts'
import userService from './services/user-service';

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

  async componentDidMount() {
    const { data, error } = await userService.profile();

    console.log(data, error);
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