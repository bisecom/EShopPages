import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import Reducers from './reducers/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Without React dev tools-->
// const enhacer = applyMiddleware(thunk)
// const store = createStore(rootReducer, {}, enhacer)
// Without React dev tools<--

// Integrating Redux dev tools for Chrome-->
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers( applyMiddleware(thunkMiddleware)  /* other store enhancers if any*/);

export const store = createStore(Reducers, enhancer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
