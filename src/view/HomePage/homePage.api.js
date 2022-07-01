import { request, endpoints } from 'configuration';

export const getAllCoursesAPI = () => request.get(endpoints.course);

export const getAllProductsAPI = () => request.get(endpoints.product);

export const getFourDataRandom = (arr) => {
  if (arr && arr.length === 0) return [];
  let data = [];
  for (let index = 0; index < 4; index++) {
    data.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return data;
};
