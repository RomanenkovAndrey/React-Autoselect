import { Actions } from '../interfaces';

export enum types {
    SEARCH_COUNTRY = 'SEARCH_COUNTRY',
    SAVE_TEMP = 'SAVE_TEMP',
    SET_INPUT = 'SET_INPUT'
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

export function setInputFlag(flag: boolean): Actions { 
        return {
            type: types.SET_INPUT,
            payload: flag
        };
      }