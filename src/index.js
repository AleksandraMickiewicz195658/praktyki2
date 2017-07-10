import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {configureApi} from './lib/api-client';

configureApi(store);

const AppWIthStore = (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

ReactDOM.render(AppWIthStore, document.getElementById('root'));
registerServiceWorker();
