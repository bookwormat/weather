import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {Provider} from 'react-redux';
import weather from './reducers';
import {rootEpic} from "./epics";

const epicMiddleWare = createEpicMiddleware(rootEpic);

const store = createStore(weather, applyMiddleware(epicMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
