import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";
import eyeIcon from "@/assets/eye.svg";
import eyeOffIcon from "@/assets/eye-off.svg";
import { IonIcon, IonRippleEffect } from "@ionic/react";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  type?: HTMLInputTypeAttribute;
}

const CustomInput = ({ value, onChange, label, type = "text" }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={
        "h-15 border rounded-3xl pl-3 pr-2 flex items-center w-full " +
        (isFocused ? "border-primary" : "border-primary-soft")
      }
    >
      <div className="relative z-10 h-full flex items-center w-full">
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
          type={type == "password" && showText ? "text" : type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none w-full h-full ml-1 font-medium text-sm text-grey flex-1"
        />
        {type == "password" ? (
          <div
            className="ion-activatable relative overflow-hidden rounded-full w-10 h-10 flex justify-center items-center"
            onClick={() => setShowText(!showText)}
          >
            {showText ? (
              <IonIcon src={eyeIcon} className="text-grey w-6 h-6" />
            ) : (
              <IonIcon src={eyeOffIcon} className="text-grey w-6 h-6" />
            )}
            <IonRippleEffect></IonRippleEffect>
          </div>
        ) : (
          <div className="pr-2"></div>
        )}
      </div>
    </div>
  );
};

export { CustomInput };
