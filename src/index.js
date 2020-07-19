import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import LazyNavigation from './navigation';
import style from './index.module.css';
import Header from './components/core/navigation/navigation';
import Aside from './components/core/aside/aside';
import Main from './components/core/main/main';
import Footer from './components/core/footer/footer';

ReactDOM.render(
  <React.StrictMode>
            <div className={style.app}>
            <Header />
            
            <div className={style.container}>
                <Aside />

                <Main>
                <LazyNavigation />
                </Main>
            </div>

            <Footer />
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
