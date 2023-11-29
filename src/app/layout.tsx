import { poppins } from '@/fonts/Poppins';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';
import { PropsWithChildren } from 'react';
import './common/assets/styles/globals.css';

type Props = {} & PropsWithChildren;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={classNames(poppins.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
