'use client';
import { Place } from '@/app/(routes)/dashboard/profile/types/user';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { LuSearch, LuX } from 'react-icons/lu';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputClassName?: string;
  clearAble?: boolean;
  onClear?: () => void;
  places: Place[] | null;
};

const Search = ({
  className,
  inputClassName,
  value,
  onChange,
  clearAble,
  onClear,
  places,
  ...props
}: Props) => {
  return (
    <>
      <div
        className={classNames(
          'flex items-center text-sm py-2 px-4 bg-white dark:bg-dark-black dark:text-white rounded-full',
          className
        )}
      >
        <input
          className={classNames(
            'outline-none border-none flex-1 bg-transparent placeholder:text-neutrals-navyGrey',
            inputClassName
          )}
          type="text"
          placeholder="Ara"
          onChange={(e) => {
            onChange?.(e);
          }}
          value={value}
          {...props}
        />
        <div className="flex items-center flex-nowrap overflow-hidden">
          <button className="bg-primary-navyBlue p-1 rounded-full">
            <LuSearch color="white" size={18} />
          </button>
          <AnimatePresence>
            {value && value.toString().length > 0 && clearAble && (
              <motion.span
                className="flex flex-nowrap items-center"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                exit={{ width: 0 }}
              >
                <span className="w-[1px] h-full bg-neutrals-navyWhite mx-2">
                  &nbsp;
                </span>
                <button
                  onClick={() => {
                    onClear?.();
                  }}
                  className="rounded-full group hover:bg-neutrals-darkWhite p-1 transition-colors"
                >
                  <LuX size={18} color={'#777E91'} />
                </button>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Search;
