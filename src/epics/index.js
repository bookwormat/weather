import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'
import {
  ACTIVATE_LOCATION, CLEAR_LOCATION,
  FETCH_WEATHER, fetchWeatherAction, fetchWeatherErrorAction, fetchWeatherSuccessAction
} from "../actions";

const ajax = ({pws}) =>
  Observable.ajax.getJSON(`/api/bb405a593d3a67d1/conditions/q/pws:${pws}.json?_=${new Date().getTime()}`);

const fetchWeatherEpic = (action$) =>
  action$
    .ofType(FETCH_WEATHER)
    .switchMap(({location}) => {
      return ajax(location)
        .takeUntil(action$.ofType(CLEAR_LOCATION))
        .map(result => {
          return fetchWeatherSuccessAction(result)
        })
        .catch(err => {
          return Observable.of(fetchWeatherErrorAction(err));
        })
    });

const activateWeatherEpic = (action$) =>
  action$
    .ofType(ACTIVATE_LOCATION)
    .switchMap(({location}) => {
      return Observable.timer(0, 10000)
        .takeUntil(action$.ofType(CLEAR_LOCATION))
        .map(() => {
          return fetchWeatherAction(location)
        })
      }
    );

export const rootEpic = combineEpics(fetchWeatherEpic, activateWeatherEpic);
