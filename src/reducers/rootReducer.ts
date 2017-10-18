import { Actions } from '../interfaces';
import { types } from '../actions/Actions';

const initialCountries: string[] = [
      'Австралия',
      'Австрия',
      'Англия',
      'Германия',
      'Россия',
      'Ямайка'
    ];

let searchedCountries: string[] = []; // в этот массив запишутся найденные страны

export default function rootReducer(state: string[] = initialCountries, action: Actions): string[] { 

    switch (action.type) {

      case types.SEARCH_COUNTRY: {
        let initCountries: string[]  = [...state]; 
        let searchValue: string = action.payload; // значение, которое будем искать
        let counter: number = 0;

        for (let i = 0; i < initCountries.length; i++) {
          // tslint:disable-next-line:no-bitwise
          if (~searchValue.indexOf(initCountries[i])) { // если найдено
            searchedCountries[counter++] = initCountries[i]; // запишем в массив
          }
        }
        return searchedCountries; // вернём всё, что найдено
      }

    default:
      return state;
    }
  }