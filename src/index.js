import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducers'
import { GET_AUTH_TOKEN } from './actions/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
const token = localStorage.getItem('token');

if (token) {
  const user = JSON.parse(localStorage.getItem('user'))
  store.dispatch({type: GET_AUTH_TOKEN, payload: user})
}

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root')
);

registerServiceWorker();
