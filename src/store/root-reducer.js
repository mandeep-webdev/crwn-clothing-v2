import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});
// import { combineReducers } from 'redux';
// import { userReducer } from './user/user.reducer';
// import { categoriesReducer } from './categories/category.reducer';
// export const rootReducer = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
// });
