import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { productsReducer } from './products';

export const reducers = combineReducers({ counter: counterReducer, products: productsReducer });