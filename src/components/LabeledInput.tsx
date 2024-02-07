import React from "react";
import { Input } from "./Input";
interface Props {
  name: string;
  label: string;
}

function LabeledInput({ name, label }: Props) {
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
      />
    </div>
  );
}

export default LabeledInput;
