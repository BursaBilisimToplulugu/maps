import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import Search from './sub-components/Search';
import Single from './sub-components/Single';

export interface DefaultInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string | JSX.Element;
  error?: string;
}

type Props = DefaultInputProps;

const Input = ({ className = '', label, children, error, ...props }: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      {label && typeof label === 'string' ? (
        <span
          className={classNames(
            'font-poppins text-xs font-bold text-neutrals-grey',
            !!error && 'text-red-500'
          )}
        >
          {label}
        </span>
      ) : (
        label
      )}
      <input
        className={classNames(
          'outline-none border-2 border-neutrals-ghostWhite',
          'dark:border-neutrals-darkWhite dark:bg-transparent',
          'rounded-xl px-4 py-3 text-sm leading-5',
          'placeholder:text-neutrals-navyGrey',
          !!error ? 'border-red-500' : ''
        )}
        {...props}
      />
    </div>
  );
};

Input.Single = Single;
Input.Search = Search;

export default Input;
