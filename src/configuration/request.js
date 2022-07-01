import axios from 'axios';

export const apiBaseUrl = () =>
  process.env.REACT_APP_API_URL?.slice?.(-1) !== '/'
    ? `${process.env.REACT_APP_API_URL}/`
    : process.env.REACT_APP_API_URL;

const instance = axios.create();
instance.defaults.baseURL = apiBaseUrl();

export default instance;
