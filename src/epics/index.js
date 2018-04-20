import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'
import {
  ACTIVATE_LOCATION, CLEAR_LOCATION,
  FETCH_WEATHER, FETCH_WEATHER_CANCEL, fetchWeatherAction, fetchWeatherCancel, fetchWeatherErrorAction,
  fetchWeatherSuccessAction
} from "../actions";

// You can get a wunderground API key at 
// https://www.wunderground.com/weather/api
const API_KEY = 'wunderground_api_key';

const ajax = ({pws}) =>
  Observable.ajax.getJSON(`/api/${API_KEY}/conditions/q/pws:${pws}.json?_=${new Date().getTime()}`);

const fetchWeatherEpic = (action$) =>
  action$
    .ofType(FETCH_WEATHER)
    .switchMap(({location}) => ajax(location)
        .takeUntil(action$.ofType(FETCH_WEATHER_CANCEL))
        .map(result => fetchWeatherSuccessAction(result))
        .catch(err => Observable.of(fetchWeatherErrorAction(err)))
    );

const clearAllEpic = (action$) =>
  action$
    .ofType(CLEAR_LOCATION)
    .mapTo(fetchWeatherCancel());

const activateWeatherEpic = (action$) =>
  action$
    .ofType(ACTIVATE_LOCATION)
    .switchMap(({location}) => Observable.timer(0, 10000)
          .takeUntil(action$.ofType(CLEAR_LOCATION))
          .map(() => fetchWeatherAction(location))
    );

export const rootEpic = combineEpics(fetchWeatherEpic, activateWeatherEpic, clearAllEpic);
