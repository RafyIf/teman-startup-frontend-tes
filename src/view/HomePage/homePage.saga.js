import { takeLatest, call, put, fork } from 'redux-saga/effects';

import { getCoursesSuccess, getCoursesError, getProductsSuccess, getProductsError } from './homePage.actions';
import { GET_COURSE_REQUEST, GET_PRODUCT_REQUEST } from './homePage.constants';
import { getAllCoursesAPI, getAllProductsAPI, getFourDataRandom } from './homePage.api';

export function* getCoursesSaga() {
  try {
    const response = yield call(getAllCoursesAPI);
    const data = getFourDataRandom(response?.data);
    yield put(getCoursesSuccess(data));
  } catch (error) {
    yield put(getCoursesError(error?.response.data));
  }
}

export function* getProductsSaga() {
  try {
    const response = yield call(getAllProductsAPI);
    const data = getFourDataRandom(response?.data);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsError(error?.response.data));
  }
}

function* homePageSaga() {
  yield takeLatest(GET_COURSE_REQUEST, getCoursesSaga);
  yield takeLatest(GET_PRODUCT_REQUEST, getProductsSaga);
}

export default function* rootHomepageSaga() {
  yield fork(homePageSaga);
}
