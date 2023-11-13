interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ value, onChange }: Props) => {
  const toggleValue = () => {
    onChange(!value);
  };
  return (
    <div
      className={
        "w-6 h-6 rounded-md border-[1.5px] flex items-center justify-center " +
        (value ? "border-primary " : "border-grey ")
      }
      onClick={toggleValue}
    >
      <div
        className={
          "w-4 h-4 rounded-sm " + (value ? "bg-primary block" : "hidden")
        }
      ></div>
    </div>
  );
};

export default Checkbox;
