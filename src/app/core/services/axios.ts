import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bbt-cms-api-of7nyq5bbq-ew.a.run.app',
  withCredentials: true,
});

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
