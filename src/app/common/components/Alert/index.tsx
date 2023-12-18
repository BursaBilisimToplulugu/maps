import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = {
  type: 'success' | 'error' | 'warning' | 'info';
} & PropsWithChildren;

const Alert = ({ children, type }: Props) => {
  return (
    <div
      className={classNames('px-4 py-2 rounded-xl text-white', {
        'bg-green-500': type === 'success',
        'bg-red-500': type === 'error',
        'bg-yellow-500': type === 'warning',
        'bg-blue-500': type === 'info',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
