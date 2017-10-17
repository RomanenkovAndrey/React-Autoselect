import { types } from './actions/Actions';

export interface Book {
    author: string;
    book: string; 
    year: string;
    index?: number;
}

export interface Actions {
    type: types;
    // tslint:disable-next-line:no-any
    payload?: any;
}