import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import Single from './sub-components/Single';

export interface DefaultInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string | JSX.Element;
}

type Props = DefaultInputProps;

const Input = ({ className = '', label, children, ...props }: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      {label && typeof label === 'string' ? (
        <span className="font-poppins text-xs font-bold text-neutrals-grey">
          {label}
        </span>
      ) : (
        label
      )}
      <input
        className={classNames(
          'outline-none border-2 border-neutrals-ghostWhite dark:border-neutrals-darkWhite',
          'rounded-xl px-4 py-3 text-sm leading-5',
          'placeholder:text-neutrals-navyGrey'
        )}
        {...props}
      />
    </div>
  );
};

Input.Single = Single;

export default Input;
