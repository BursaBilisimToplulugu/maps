type PropTypes = {
  label: string;
  className?: string;
};

function Checkbox({ label, className }: PropTypes) {
  return (
    <label className="group flex gap-2 mb-2 relative cursor-pointer select-none text-white dark:text-[#141416] text-[14px]">
      <input className="appearance-none peer" type="checkbox" />
      <span className="dark:bg-[#23262F]  dark:border-[#353945] flex items-center justify-center text-white bg-white rounded-[4px] w-6 h-6 border-2 border-[#E6E8EC] peer-checked:bg-[#3B71FE] peer-checked:border-[#3B71FE] peer-checked:after:content-['✔']"></span>
      {label}
    </label>
  );
}

export default Checkbox;
