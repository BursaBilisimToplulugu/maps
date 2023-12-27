import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

const token = getCookie('token', { httpOnly: true, secure: true });
const refresh_token = getCookie('refresh_token', {
  httpOnly: true,
  secure: true,
});

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://bbt-cms-api-of7nyq5bbq-ew.a.run.app',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    refresh_token: refresh_token ? refresh_token : '',
  },
});

instance.interceptors.request.use(async (config) => {
  // console.log('interceptor');
  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;
  const refresh_token = cookiesStore.get('refresh_token')?.value;

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp) {
      // add 3 hours to the token expiration date
      const tokenExpirationDate = dayjs(decodedToken.exp * 1000)
        .add(3, 'hour')
        .toDate();
      const now = dayjs().add(3, 'hours').toDate();
      const isExpired = dayjs(now).isAfter(tokenExpirationDate);
      if (isExpired) {
        // refreshing token with fetch api because doing with axios will cause infinite loop
        const response = await fetch(`${config.baseURL}/auth/refresh-token`, {
          method: 'POST',
          //@ts-ignore
          headers: {
            refresh_token,
          },
        }).then((res) => res.json());
        console.log({ response });
        setCookie('token', response.data.access_token, {
          httpOnly: true,
          secure: true,
        });
      }
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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
