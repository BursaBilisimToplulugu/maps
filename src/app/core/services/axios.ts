import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://bbt-cms-api-of7nyq5bbq-ew.a.run.app',
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = config.headers.Authorization as string;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
        console.log('token expired');
      }
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.config.method === 'post') {
      return response;
    }
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export { instance };
