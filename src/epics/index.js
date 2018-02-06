import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'
import {FETCH_WEATHER, fetchWeatherErrorAction, fetchWeatherSuccessAction} from "../actions";

const ajax = ({region, city}) =>
  Observable.ajax.getJSON(`/api/bb405a593d3a67d1/conditions/q/${region}/${city}.json`);


const fetchWeatherEpic = (action$) =>
  action$
    .ofType(FETCH_WEATHER)
    .switchMap(({location}) => {
      return ajax(location)
        .map(result => {
          return fetchWeatherSuccessAction(result)
        })
        .catch(err => {
          return Observable.of(fetchWeatherErrorAction(err));
        })
    });

export const rootEpic = combineEpics(fetchWeatherEpic);
