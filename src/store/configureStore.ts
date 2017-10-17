import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { IData } from '../interfaces';

export default function configureStore() {
  const store = createStore<IData>(rootReducer);
  return store;
}