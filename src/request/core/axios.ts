import axios from 'axios';
import { stringify } from 'qs';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: '/api',
  timeout: 10000,
  withCredentials: false,
  paramsSerializer: {
    serialize: (params) =>
      stringify(params, {
        arrayFormat: 'brackets',
        skipNulls: true,
      }),
  },
});

export default instance;
