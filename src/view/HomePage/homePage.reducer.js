import {
  GET_COURSE_ERROR,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from './homePage.constants';

export const initialState = {
  courseData: null,
  productData: null,

  // error dan loading
  error: null,
  loadingProducts: true,
  loadingCourses: false,
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loadingProducts: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingProducts: false,
        productData: action.payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        loadingProducts: false,
        error: action.payload,
      };

    case GET_COURSE_REQUEST:
      return {
        ...state,
        loadingCourses: true,
      };
    case GET_COURSE_SUCCESS:
      return {
        ...state,
        loadingCourses: false,
        courseData: action.payload,
      };
    case GET_COURSE_ERROR:
      return {
        ...state,
        loadingCourses: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default homePageReducer;
