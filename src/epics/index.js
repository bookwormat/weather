import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'
import {clear, LOAD_WEATHER} from "../actions";

const loadWeatherEpic = (action$) => {
  return action$.ofType(LOAD_WEATHER)
    .switchMap(() => {
      return Observable.of(clear()).delay(2000);
    })
};

export const rootEpic = combineEpics(loadWeatherEpic);
