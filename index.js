/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import store from './reduxComponent/Store';

const redux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => redux);