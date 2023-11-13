import classNames from 'classnames';
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { LuSearch, LuX } from 'react-icons/lu';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputClassName?: string;
};

const Search = ({
  className,
  inputClassName,
  value,
  onChange,
  ...props
}: Props) => {
  const [internalValue, setinternalValue] = useState<typeof value>('');
  useEffect(() => {
    value && setinternalValue(value);
  }, [value]);

  return (
    <div
      className={classNames(
        'flex items-center text-sm py-2 px-4 bg-white rounded-full',
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
          setinternalValue(e.target.value);
        }}
        {...props}
      />
      <div className="flex items-center">
        <button className="bg-primary-navyBlue p-1 rounded-full">
          <LuSearch color="white" size={18} />
        </button>
        {internalValue && (
          <>
            <span className="w-[1px] h-full bg-neutrals-darkWhite mx-2">
              &nbsp;
            </span>
            <button className="rounded-full group hover:bg-neutrals-darkWhite p-1 transition-colors">
              <LuX size={18} className="text-neutrals-grey" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
