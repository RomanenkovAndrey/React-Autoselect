import { Actions } from '../interfaces';

export enum types {
    SEARCH_COUNTRY = 'SEARCH_COUNTRY',
    SAVE_TEMP = 'SAVE_TEMP'
}

export function searchCountry(value: string): Actions { 
      return {
          type: types.SEARCH_COUNTRY,
          payload: value
      };
    }

export function saveTempValue(value: string): Actions { 
        return {
            type: types.SAVE_TEMP,
            payload: value
        };
      }