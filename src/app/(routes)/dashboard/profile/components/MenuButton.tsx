'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

export type MenuButtonProps = {
  title: string;
  icon: ReactElement;
  url: string;
};

const MenuButton = ({ icon, title, url }: MenuButtonProps) => {
  const pathname = usePathname();
  const [isSelected, setisSelected] = useState(false);

  useEffect(() => {
    setisSelected(pathname === url);
  }, [pathname, url]);
  return (
    <li>
      <Link
        prefetch
        href={url}
        className={classNames(
          'flex items-center w-full px-4 py-2 text-left text-sm font-medium text-primary-logoPurple rounded-xl gap-x-2',
          'hover:bg-primary-logoPurple hover:text-white hover:fill-white hover:bg-opacity-[85%]',
          'transition-all',
          isSelected ? 'bg-primary-logoPurple text-white fill-white' : ''
        )}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default MenuButton;
