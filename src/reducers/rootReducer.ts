import { Actions, SearchState } from '../interfaces';
import { types } from '../actions/Actions';

const initialState: SearchState = { 
    searchedCountries: [],
    isLoading: false
  };

export default function rootReducer(state: SearchState = initialState, action: Actions): SearchState { 

    switch (action.type) {

      case types.SEARCH_COUNTRY_BEGIN: {
        return {
          ...state,
          isLoading: true
        };
      }

      case types.SEARCH_COUNTRY_SUCCESS: {
        const newState = {...state};
  
        const initCountries = action.payload.list;  // нужно достать поле result из RestResponse
        const searchedCountries = [];
        const searchValue = action.payload.value; // значение, которое будем искать
  
        let counter = 0;
  
        if (searchValue !== '') { // если всё стёрли, то ничего и не ищем
          for (let i = 0; i < initCountries.length; i++) {
            // tslint:disable-next-line:no-bitwise
            if (~initCountries[i].indexOf(searchValue)) { // если найдено
              searchedCountries[counter] = initCountries[i]; // запишем в массив
              counter++; 
            }
          }
        }
        newState.searchedCountries = searchedCountries; // вот где меняется массив найденных стран
        newState.isLoading = false;
        return newState; 
      }

    default:
      return state;
    }
  }