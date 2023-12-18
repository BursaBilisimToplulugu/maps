'use client';
import { useState } from 'react';
import Icon from '../Icon';

type PropTypes = {
  label: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
};

function Checkbox({ label, onChange = () => {}, checked = false }: PropTypes) {
  const [isCheck, setIsCheck] = useState(checked);

  return (
    <label
      className="flex items-center relative cursor-pointer select-none dark:text-white text-[#141416] text-[14px]"
      onChange={() => {
        setIsCheck((prev) => !prev);
        onChange(isCheck);
      }}
    >
      <input
        className="appearance-none peer"
        type="checkbox"
        checked={isCheck}
      />
      <span className="mr-3 bg-[#23262F] border-[#353945] flex items-center justify-center text-white dark:bg-white rounded-[4px] w-6 h-6 border-2 dark:border-[#E6E8EC] peer-checked:bg-[#3B71FE] peer-checked:border-[#3B71FE]">
        {isCheck && <Icon.CheckMark />}
      </span>
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
