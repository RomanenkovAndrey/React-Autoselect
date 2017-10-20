import { Actions } from '../interfaces';
import { Dispatch } from 'redux';
import * as request from 'superagent';

export enum types {
    SEARCH_COUNTRY_BEGIN = 'SEARCH_COUNTRY_BEGIN',
    SEARCH_COUNTRY_SUCCESS = 'SEARCH_COUNTRY_SUCCESS'
}

export const searchCountryAsync = (value: string) =>
    (dispatch: Dispatch<Actions>) => {
        dispatch({ type: types.SEARCH_COUNTRY_BEGIN, payload: null });

        request
            .get('http://services.groupkt.com/country/get/all')
            // tslint:disable-next-line:no-console
            .then((res) => console.log(res));

        // const jsonPromise = promise.then(response => {
        //     return response.json(); 
        // }); 
        // jsonPromise.then(data => { // запишем наш объект в list, который затем достанем из payload
        //     dispatch({
        //         type: types.SEARCH_COUNTRY_SUCCESS, payload: {
        //             list: data,
        //             value: value
        //         }
        //     });
        // });
    };