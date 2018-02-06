import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'
import {FETCH_WEATHER, fetchWeatherSuccessAction} from "../actions";

const ajax = ({region, city}) =>
  Observable.ajax.getJSON(`/api/bb405a593d3a67d1/conditions/q/${region}/${city}.json`);


const fetchWeatherEpic = (action$) => {
  return action$.ofType(FETCH_WEATHER)
    .switchMap(({payload}) => {
      return ajax(payload)
        .map(payload => {
          return fetchWeatherSuccessAction(payload)
        })
  });
};

export const rootEpic = combineEpics(fetchWeatherEpic);
