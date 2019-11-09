import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//applyMiddleware takes as many logger as it possibly can
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;