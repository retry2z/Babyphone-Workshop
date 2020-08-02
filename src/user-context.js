import React from 'react'
import Contexts from './Contexts'
import userService from './services/user-service';
import cookieAdmin from './services/cookie';

const cookieHandler = cookieAdmin();
const { UserContext } = Contexts();

class ContextContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogged: null,
      user: null
    }
  }

  login = (user) => {
    const newState = { ...this.state };

    newState.isLogged = true;
    newState.user = user;

    this.setState(newState);
  }

  logout = () => {
    cookieHandler.remove();

    const newState = { ...this.state };

    newState.isLogged = false;
    newState.user = null;

    this.setState(newState);
  }

  async componentDidMount() {
    const user = await userService.profile() || null;

    if (user === null) {
      cookieHandler.remove();

      const newState = { ...this.state };
      newState.isLogged = false;
      newState.user = null;
      this.setState(newState);

      return
    }

    if (!user.isValid) {
      cookieHandler.remove();

      return
    }

    this.login(user.data);
  }

  render() {
    const { isLogged, user } = this.state;

    if (isLogged === null) {
      return (<div>Loading...</div>)
    }

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
