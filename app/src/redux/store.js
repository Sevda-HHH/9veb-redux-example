import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk)
export const store = createStore(reducers, middlewares)