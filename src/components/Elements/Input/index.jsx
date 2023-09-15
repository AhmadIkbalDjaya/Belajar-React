import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} placeholder={placeholder} type={type} ref={ref} />
    </div>
  );
});

export default InputForm;
