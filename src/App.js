import React from 'react';
import style from './app.module.css';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className={style.app}>
      <Navigation />
    </div>
  );
}

export default App;
