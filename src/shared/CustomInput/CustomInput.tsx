import { ChangeEventHandler, useState } from "react";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const CustomInput = ({ value, onChange, label }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={
        "h-15 border rounded-3xl pl-3 pr-4 flex items-center w-full " +
        (isFocused ? "border-primary" : "border-primary-soft")
      }
    >
      <div className="relative z-10 h-full">
        <div
          className={
            "absolute bg-primary-dark px-1 -z-10 transition-all " +
            (isFocused || value.length > 0
              ? "top-0 -translate-y-1/2 text-xs font-medium "
              : "top-1/2 -translate-y-1/2 text-sm text-grey")
          }
        >
          {label}
        </div>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          // placeholder={isFocused ? "Input is focused" : "Input is not focused"}
          className="bg-transparent outline-none w-full h-full ml-1 font-medium text-sm text-grey"
        />
      </div>
    </div>
  );
};

export { CustomInput };
