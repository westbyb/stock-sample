import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import _ from 'underscore';
import 'babel-polyfill';

global._ = _;

import App from './components/App/App';

import './index.scss';

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, document.querySelector('#react-entry'));
