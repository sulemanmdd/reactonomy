import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8JwKnGZysD5v0U4xfF_hVYLbBXAmVr9w",
    authDomain: "camp-recruit.firebaseapp.com",
    databaseURL: "https://camp-recruit.firebaseio.com",
    projectId: "camp-recruit",
    storageBucket: "camp-recruit.appspot.com",
    messagingSenderId: "439939541271"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
