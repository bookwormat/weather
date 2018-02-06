import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable'
import {FETCH_WEATHER, fetchWeatherSuccessAction} from "../actions";

const fetchWeatherEpic = (action$) => {
  return action$.ofType(FETCH_WEATHER)
    .switchMap(({payload}) => {
      const { region, city } = payload;
      return Observable.ajax.getJSON(`/api/bb405a593d3a67d1/conditions/q/${region}/${city}.json`)
        .map(payload => {
          return fetchWeatherSuccessAction(payload)
        })
  });
};

export const rootEpic = combineEpics(fetchWeatherEpic);
