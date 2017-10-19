import { types } from './actions/Actions';

export interface SearchState {
    searchedCountries: string[];
    isLoading: boolean;
}

export interface Actions {
    type: types;
    // tslint:disable-next-line:no-any
    payload?: any;
}