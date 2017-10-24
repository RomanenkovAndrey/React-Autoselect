import { types } from './actions/Actions';

export interface SearchState {
    initialCountries: string[];
    searchedCountries: string[];
    value: string;
    visible: boolean;
}

export interface Actions {
    type: types;
    // tslint:disable-next-line:no-any
    payload?: any;
}