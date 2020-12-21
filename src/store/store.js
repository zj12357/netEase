import { createStore, applyMiddleware } from 'redux';
import incrementReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { watchIncrementAsync } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware,createLogger()];
const store = createStore(incrementReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(watchIncrementAsync)
export default store;
