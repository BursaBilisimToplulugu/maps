'use client';
import { poppins } from '@/fonts/Poppins';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

type Props = ReactSelectProps & {};

const Select = ({ placeholder = 'Lütfen Seçiniz', ...props }: Props) => {
  return (
    <ReactSelect
      classNames={{
        placeholder: () =>
          classNames(
            '!text-neutrals-balticSea !text-sm',
            poppins.className,
            'dark:!text-neutrals-milkWhite'
          ),
        control: () =>
          classNames(
            '!border-neutrals-navyWhite !bg-neutrals-milkWhite',
            '!shadow-none !rounded-xl',
            'dark:!bg-neutrals-balticSea dark:!text-neutrals-milkWhite dark:!border-neutrals-darkGrey'
          ),
        valueContainer: () => classNames('!py-2 !pl-3'),
      }}
      placeholder={placeholder}
      components={{
        IndicatorSeparator: null,

        DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
          <motion.span
            animate={{ rotate: menuIsOpen ? 180 : 0 }}
            className="px-3"
          >
            <LuChevronDown size={16} />
          </motion.span>
        ),
      }}
      {...props}
    />
  );
};

export default Select;
