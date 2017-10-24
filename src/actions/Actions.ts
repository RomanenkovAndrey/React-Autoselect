import { Actions } from '../interfaces';

export enum types {
    SEARCH_COUNTRY = 'SEARCH_COUNTRY',
    SAVE_STATE = 'SAVE_STATE'
}

export function searchCountry(value: string): Actions { 
      return {
          type: types.SEARCH_COUNTRY,
          payload: value
      };
    }

export function saveState(): Actions { 
        return {
            type: types.SAVE_STATE
        };
      }