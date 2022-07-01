import {
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_ERROR,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from './homePage.constants';

export const getProductsAction = () => ({ type: GET_PRODUCT_REQUEST });
export const getProductsError = (payload) => ({ type: GET_PRODUCT_ERROR, payload });
export const getProductsSuccess = (payload) => ({ type: GET_PRODUCT_SUCCESS, payload });

export const getCoursesError = (payload) => ({ type: GET_COURSE_ERROR, payload });
export const getCoursesAction = (payload) => ({ type: GET_COURSE_REQUEST, payload });
export const getCoursesSuccess = (payload) => ({ type: GET_COURSE_SUCCESS, payload });
