import Icon from '../Icon';

type PropTypes = {
  label: string;
  onChange?: () => void;
};

function Checkbox({ label, onChange }: PropTypes) {
  return (
    <label
      className="group flex items-center gap-2 mb-2 relative cursor-pointer select-none dark:text-white text-[#141416] text-[14px]"
      onChange={onChange}
    >
      <input className="appearance-none peer" type="checkbox" />
      <span className="bg-[#23262F] border-[#353945] flex items-center justify-center text-white dark:bg-white rounded-[4px] w-6 h-6 border-2 dark:border-[#E6E8EC] peer-checked:bg-[#3B71FE] peer-checked:border-[#3B71FE]">
        <Icon.CheckMark />
      </span>
      {label}
    </label>
  );
}

export default Checkbox;
