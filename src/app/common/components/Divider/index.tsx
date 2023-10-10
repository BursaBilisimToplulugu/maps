interface Props {
  variant?: "horizontal" | "vertical";
  size?: "normal" | "thick";
}

const Divider = ({ variant = "vertical", size = "normal" }: Props) => {
  return (
    <div
      className={`flex ${
        variant === "vertical"
          ? size === "thick"
            ? "h-0.5 w-full"
            : "h-px w-full"
          : size === "thick"
          ? "w-0.5 h-full"
          : "w-px h-full"
      } bg-[#E6E8EC]`}
    ></div>
  );
};

export default Divider;
