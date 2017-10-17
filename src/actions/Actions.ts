import { Actions } from '../interfaces';

export enum types {
    ADD_BOOK = 'ADD_BOOK', 
    DELETE_BOOK = 'DELETE_BOOK', 
    SAVE_BOOK = 'SAVE_BOOK', 
    UPDATE_BOOK = 'UPDATE_BOOK'
}

export function addBook(author: string, book: string, year: string): Actions { 
      return {
          type: types.ADD_BOOK,
          payload: {author, book, year}
      };
    }

export function deleteBook(delIndex: number): Actions {
    return {
        type: types.DELETE_BOOK,
        payload: delIndex
    };
}

export function saveBook(updIndex: number): Actions {
    return{
        type: types.SAVE_BOOK,
        payload: updIndex
    };
}

export function updateBook(author: string, book: string, year: string, updIndex: number): Actions {
    return{
        type: types.UPDATE_BOOK,
        payload: {author, book, year, updIndex}
    };
}