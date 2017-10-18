import { Actions } from '../interfaces';

export enum types {
    SEARCH_COUNTRY = 'SEARCH_COUNTRY'
}

export function searchCountry(value: string): Actions { 
      return {
          type: types.SEARCH_COUNTRY,
          payload: value
      };
    }
