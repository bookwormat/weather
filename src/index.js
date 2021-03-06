import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {Provider} from 'react-redux';
import weatherReducer from './reducers';
import {rootEpic} from "./epics";
import {Provider as FelaProvider} from 'react-fela';
import {createRenderer} from 'fela';

const epicMiddleWare = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  weatherReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleWare)
  )
);

const renderer = createRenderer();

ReactDOM.render(
  <FelaProvider renderer={renderer}>
    <Provider store={store}>
      <App/>
    </Provider>
  </FelaProvider>,
document.getElementById('root')
);
