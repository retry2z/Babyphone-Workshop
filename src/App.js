import React from 'react';
import style from './App.module.css';
import Navigation from './components/navigation/navigation';
import Aside from './components/aside/aside';

const App = () => {
  return (
    <div className={style.app}>
      <Navigation />
      <Aside />
    </div>
  );
}

export default App;
