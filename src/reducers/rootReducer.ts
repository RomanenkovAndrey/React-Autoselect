import { Actions } from '../interfaces';
import { types } from '../actions/Actions';

const initialState: string[] = [
      'Австралия',
      'Австрия',
      'Англия',
      'Россия'
    ];
  
export default function rootReducer(state: string[] = initialState, action: Actions): string[] { 

    switch (action.type) {

      case types.ADD_BOOK: {
        const newState  = {...state};
        let arr = [...newState.data]; 
        arr.unshift (action.payload);
        newState.data = arr;
        return newState;
      }

      case types.DELETE_BOOK: {
        const newState  = {...state};
        let arr = [...newState.data];
        arr.splice(action.payload, 1);
        newState.data = arr;
        return newState;
      }

    default:
      return state;
    }
  }