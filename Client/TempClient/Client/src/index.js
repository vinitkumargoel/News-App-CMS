import React from 'react';
import { render } from 'react-dom';
import styles from './css/index.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './jsx/App';
import store from './js/stores';
import registerServiceWorker from './registerServiceWorker';
import wsHelper from './js/helpers/websocketHelper';

//global vars
const supportsHistory = 'pushState' in window.history;

wsHelper.serverListener(store);

var containerRef = render(
    <div className={styles.root}>
        <Provider store={store}>
            <Router basename={"/"}>
                <App />
            </Router>
        </Provider>
    </div>, document.getElementById('root')
);

registerServiceWorker();