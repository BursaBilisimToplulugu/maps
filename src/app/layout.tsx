import { poppins } from '@/fonts/Poppins';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';
import { getServerSession } from 'next-auth';
import { PropsWithChildren } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { authOptions } from './api/auth/authOptions';
import './common/assets/styles/globals.css';
import Providers from './core/providers/main';

type Props = {} & PropsWithChildren;

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={classNames(poppins.className)}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
