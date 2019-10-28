import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { initializeStore } from './store';
import { Provider } from 'react-redux';

let store = initializeStore();


render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

