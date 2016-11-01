import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store/store.js';

require('./index.less');

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
);