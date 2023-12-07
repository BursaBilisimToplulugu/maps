import { CustomSession } from '@/app/(routes)/dashboard/layout';
import { User } from '@/app/(routes)/dashboard/profile/types/user';
import { Response } from '@/app/common/types/response';
import { instance } from '@/app/core/services/axios';
import { jwtDecode } from 'jwt-decode';
import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials) {
          try {
            const { data } = await instance.post(
              '/auth/login',
              {
                email: credentials.email,
                password: credentials.password,
              },
              { withCredentials: true }
            );

            const userData = data.data;
            console.log('got user data');
            return {
              ...userData,
            };
          } catch (error: any) {
            throw new Error(
              typeof error.response.data.message === 'string'
                ? JSON.stringify({
                    type: 'text',
                    message: error.response.data.message,
                  })
                : JSON.stringify({
                    type: 'fieldError',
                    fields: error.response.data.message,
                  })
            );
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      let currentUser = null;
      if (token.user) {
        const { access_token, refresh_token } =
          token.user as CustomSession['user'];
        const decodedToken = jwtDecode(access_token);

        if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
          const { data } = await instance.post<Response<User>>(
            '/auth/refresh-token',
            {},
            {
              headers: {
                refresh_token,
              },
            }
          );
          const newAccessToken = data.data.access_token;
          token.access_token = newAccessToken;
        }
      }
      if (user) {
        currentUser = { ...user };
        return { ...token, user: currentUser };
      }
      return token;
    },
    // @ts-ignore
    async session({ session, token }) {
      const user = token.user;
      return {
        ...session,
        user,
      };
    },
  },
  debug: false,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
};
