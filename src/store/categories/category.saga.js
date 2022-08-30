import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    // use call() for to run sideeffects..
    yield put(fetchCategoriesSuccess(categoriesArray)); // use put instead of dispatch()
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  //generators also response to an action like reducers
  yield takeLatest(
    //take receieve actions and it takes 2 args -- actionType , wt u want to happen
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]); //contains list of generator functions...
}
