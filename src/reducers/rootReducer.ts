import { Actions, SearchState } from '../interfaces';
import { types } from '../actions/Actions';

const initialState: SearchState = { 
  initialCountries: [
      'Австралия',
      'Австрия',
      'Англия',
      'Германия',
      'Россия',
      'Ямайка'
    ], 
    searchedCountries: []
  };

export default function rootReducer(state: SearchState = initialState, action: Actions): SearchState { 

    switch (action.type) {

      case types.SEARCH_COUNTRY: {

        const newState = {...state};

        const initCountries = newState.initialCountries; 
        const searchedCountries = [];
        const searchValue = action.payload; // значение, которое будем искать

        let counter = 0;

        for (let i = 0; i < initCountries.length; i++) {
          // tslint:disable-next-line:no-bitwise
          if (~initCountries[i].indexOf(searchValue)) { // если найдено
            searchedCountries[counter] = initCountries[i]; // запишем в массив
            counter++; 
          }
        }
        newState.searchedCountries = searchedCountries; // вот где меняется массив найденных стран
        return newState; 
      }

    default:
      return state;
    }
  }