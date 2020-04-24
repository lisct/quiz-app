import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Router';
import Firebase from './components/firebase/Firebase';
import { FirebaseContext } from './components/firebase/FirebaseContext';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Root />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
