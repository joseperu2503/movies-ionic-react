import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Otp = ({ value, onChange }: Props) => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);

  const inputRefs = [inputRef1, inputRef2, inputRef3, inputRef4];

  useEffect(() => {
    setTimeout(() => {
      setFocus(value.length);
    }, 200);
  }, []);

  const setFocus = (position: number) => {
    let inputRef = null;
    if (position >= 4) {
      inputRef = inputRefs[3];
    } else {
      inputRef = inputRefs[position];
    }
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const onOtpClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setFocus(value.length);
  };

  const addCharacter = (newCharacter: string) => {
    if (newCharacter.length != 1) return;
    const newValue = value + newCharacter;
    setFocus(newValue.length);

    onChange(newValue);
  };

  const removeCharacter = () => {
    if (value.length == 0) return;
    const newValue = value.slice(0, -1);
    setFocus(newValue.length);
    onChange(newValue);
  };

  return (
    <div
      className=" w-full flex gap-4 items-center justify-center"
      onClick={onOtpClick}
    >
      <InputItem
        ref={inputRef1}
        addCharacter={addCharacter}
        removeCharacter={removeCharacter}
        value={value[0] ?? ""}
      />
      <InputItem
        ref={inputRef2}
        addCharacter={addCharacter}
        removeCharacter={removeCharacter}
        value={value[1] ?? ""}
      />
      <InputItem
        ref={inputRef3}
        addCharacter={addCharacter}
        removeCharacter={removeCharacter}
        value={value[2] ?? ""}
      />
      <InputItem
        ref={inputRef4}
        addCharacter={addCharacter}
        removeCharacter={removeCharacter}
        value={value[3] ?? ""}
      />
    </div>
  );
};

export { Otp };

interface InputItemProps {
  addCharacter: (value: string) => void;
  removeCharacter: () => void;
  value: string;
}
const InputItem = forwardRef<HTMLInputElement, InputItemProps>(
  ({ addCharacter, removeCharacter, value }, ref) => {
    const [inputValue, setInputValue] = useState("");

    //funcion para detectar cuando presiona la tecla borrar
    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      //la eliminacion de caracteres solo funcionara con esta parte, se usa preventDefault
      // para que no se ejecute handleInputChange
      if (event.key === "Backspace") {
        event.preventDefault();
        removeCharacter();
      }

      //para que solo deje ingresar numeros
      if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) {
        event.preventDefault();
      }
    };

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      addCharacter(event.target.value);
    };

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <input
        type="number"
        ref={ref}
        value={inputValue}
        autoFocus={true}
        className="bg-primary-soft appearance-non w-16 h-16 rounded-xl outline-none caret-transparent border border-transparent focus:border-primary text-center text-2xl font-semibold"
        maxLength={1}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    );
  }
);
