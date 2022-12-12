import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { productsReducer, basketReducer } from './products';

export const reducers = combineReducers({
    basket: basketReducer,
    counter: counterReducer,
    products: productsReducer
});