import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));
console.log(typeof composedEnhancers);
export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
