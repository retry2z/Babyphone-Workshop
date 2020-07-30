import React from 'react'
import Contexts from './Contexts'

const { UserContext } = Contexts();
// function getCookie(name) {
//   const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//   console.log(cookieValue);
// }


class ContextContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
      user: null
    }
  }

  logIn = (user) => {
  }

  logOut = () => {
  }

  componentDidMount() {
    console.log('da');
  }

  render() {
    const {
      loggedIn,
      user
    } = this.state

    return (
      <UserContext.Provider
        value={{
          loggedIn,
          user,
          logIn: this.logIn,
          logOut: this.logOut
        }}>

        {this.props.children}

      </UserContext.Provider>
    )
  }
}

export default ContextContainer