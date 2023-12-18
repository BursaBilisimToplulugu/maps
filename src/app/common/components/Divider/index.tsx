import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: 'horizontal' | 'vertical';
  size?: 'normal' | 'thick';
  containerClassName?: string;
}

const Divider = ({
  variant = 'vertical',
  size = 'normal',
  className = '',
  containerClassName = '',
  ...props
}: Props) => {
  return (
    <div className={classNames(containerClassName)}>
      <div
        className={classNames(
          `flex dark:bg-neutrals-grey bg-neutrals-balticSea`,
          {
            'h-0.5 w-full dark:bg-neutrals-grey bg-neutrals-balticSea':
              variant === 'vertical',
            'w-0.5 h-full dark:bg-neutrals-grey bg-neutrals-balticSea':
              variant === 'horizontal',
          },
          className
        )}
      ></div>
    </div>
  );
};

export default Divider;
