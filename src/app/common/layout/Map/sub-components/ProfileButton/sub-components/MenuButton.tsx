import { MenuButtonProps } from '@/app/(routes)/dashboard/profile/components/MenuButton';
import classNames from 'classnames';
import Link from 'next/link';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = {} & MenuButtonProps &
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const MenuButton = ({
  icon,
  title,
  url,
  className = '',
  onClick,
  ...props
}: Props) => {
  const content = (
    <>
      {icon}
      <span>{title}</span>
    </>
  );

  const classes = classNames(
    'flex items-center space-x-2 p-2 rounded-xl',
    'transition-all hover:text-white hover:bg-primary-navyBlue w-full',
    className
  );

  return (
    <li>
      {onClick ? (
        <button className={classes} {...props} onClick={onClick}>
          {content}
        </button>
      ) : (
        <Link className={classes} href={url}>
          {content}
        </Link>
      )}
    </li>
  );
};

export default MenuButton;
