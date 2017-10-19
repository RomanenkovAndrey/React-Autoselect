import { Actions } from '../interfaces';
import { Dispatch } from 'redux';

export enum types {
    SEARCH_COUNTRY = 'SEARCH_COUNTRY',
    SEARCH_COUNTRY_BEGIN = 'SEARCH_COUNTRY_BEGIN',
    SEARCH_COUNTRY_SUCCESS = 'SEARCH_COUNTRY_SUCCESS',
    SEARCH_COUNTRY_FAIL = 'SEARCH_COUNTRY_FAIL',
    SEARCH_COUNTRY_ASYNC = 'SEARCH_COUNTRY_ASYNC'
}

export const searchCountryAsync = (value: string) =>
    (dispatch: Dispatch<Actions>) => {
        dispatch({ type: types.SEARCH_COUNTRY_BEGIN, payload: null });

        const promise = fetch('http://localhost:4000/countries');
        const jsonPromise = promise.then(response => {
            return response.json();
        }); // promise выполнился (пришел ответ)
        jsonPromise.then(data => { // парсим ответ на массив стран
            dispatch({
                type: types.SEARCH_COUNTRY_SUCCESS, payload: {
                    list: data,
                    value: value
                }
            });
        });
    };