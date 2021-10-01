import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { Reducer } from './reducer';
const myStore = createStore(Reducer, applyMiddleware(thunk))

export default myStore;