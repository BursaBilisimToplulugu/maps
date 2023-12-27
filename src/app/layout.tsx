import { poppins } from '@/fonts/Poppins';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';
import { PropsWithChildren } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import './common/assets/styles/globals.css';
import { getSession } from './common/utils/getSession';
import Providers from './core/providers/main';

type Props = {} & PropsWithChildren;

const RootLayout = async ({ children }: Props) => {
  const { token, user } = await getSession();
  return (
    <html lang="en">
      <body className={classNames(poppins.className)}>
        <Providers token={token} session={user}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
