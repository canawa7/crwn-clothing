

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { persistStore } from 'redux-persist';
//Allows our browser to actually cash our store
//Redux persist allows us to leverage the session storage or local storage

const middlewares = [logger];
//Middleware is just a function that receives actions in, it console logs it for us, then moves it along

//applyMiddleware takes as many logger as it possibly can
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
//A persisted version of our store. This will create a new provider that is going to wrap our application

export default {store, persistor};