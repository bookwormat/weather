import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'

const loadWeatherEpic = (action$) => {
  return action$
    .do(action => console.log(action))
    .ignoreElements();
};

export const rootEpic = combineEpics(loadWeatherEpic);
