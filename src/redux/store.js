import {applyMiddleware, createStore,} from 'redux';
import { userReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchUser } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser)