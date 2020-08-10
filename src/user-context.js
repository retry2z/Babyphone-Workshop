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
      isLoading: false,
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

  logout = async () => {
    cookieHandler.remove();
    await userService.logout();

    const newState = { ...this.state };

    newState.isLogged = false;
    newState.user = null;

    this.setState(newState);
  }

  loadingToggle = () => {
    const newState = { ...this.state };
    newState.isLoading = !this.state.isLoading;
    this.setState(newState);
  }

  async componentDidMount() {
    //const current = await userService.current() || null;
    const user = await userService.profile() || null;

    // if (((user === null || !user.isValid) || (current === null || !current.isValid)) || (user.uid !== current.uid)) {
    if (user === null || !user.isValid) {
  
    cookieHandler.remove();

      const newState = { ...this.state };
      newState.isLogged = false;
      newState.user = null;
      this.setState(newState);

      return
    }

    this.login(user.data);
  }

  render() {
    const { isLogged, user, isLoading } = this.state;

    if (isLogged === null) {
      return (<div>Loading...</div>)
    }

    return (
      <UserContext.Provider
        value={{
          isLoading,
          isLogged,
          user,
          login: this.login,
          logout: this.logout,
          loadingToggle: this.loadingToggle,
        }}>

        {this.props.children}

      </UserContext.Provider>
    )
  }
}

export default ContextContainer
