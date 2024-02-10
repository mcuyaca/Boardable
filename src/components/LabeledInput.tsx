import { Input } from "./Input";
interface Props {
  name: string;
  label: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
}

function LabeledInput({ name, label, disabled, value, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex justify-start text-sm" htmlFor="username">
        {label}
      </label>
      <Input
        id={name}
        className="h-10"
        name={name}
        type={name}
        autoComplete={name}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default LabeledInput;
