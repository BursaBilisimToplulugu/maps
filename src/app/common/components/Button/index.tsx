import classNames from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'neutral' | 'light' | 'dark';
  size?: 'small' | 'medium';
}

const Button = ({
  variant = 'neutral',
  size = 'medium',
  className,
  children,
  ...rest
}: Props) => {
  return (
    <button
      className={classNames('button', variant, size, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
