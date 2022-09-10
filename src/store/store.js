import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [logger];
// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

// import { compose, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { rootReducer } from './root-reducer';
// // import createSagaMiddleware from 'redux-saga';

// // import { rootSaga } from './root-saga';

// // const sagaMiddleware = createSagaMiddleware();
// const middleWares = [logger];
// // const middleWares = [logger, sagaMiddleware];

// const composedEnhancers = compose(applyMiddleware(...middleWares));
// // console.log(typeof composedEnhancers);

// export const store = configureStore({
//     reducer : {}

// })
// // export const store = createStore(rootReducer, undefined, composedEnhancers);

// // sagaMiddleware.run(rootSaga);
