import { types } from './actions/Actions';

export interface SearchState {
    initialCountries: string[];
    searchedCountries: string[];
    tempValue: string;
    articleToInputFlag: boolean;
}

export interface Actions {
    type: types;
    // tslint:disable-next-line:no-any
    payload?: any;
}