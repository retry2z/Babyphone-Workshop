import React from 'react';
import ReactDOM from 'react-dom';

import UserContext from './user-context';
import NavigationRouter from './navigation/navigation';

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <NavigationRouter />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);


