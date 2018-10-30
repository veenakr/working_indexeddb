import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.css';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { configureFakeBackend } from './helpers/_helpers';

configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.register();
