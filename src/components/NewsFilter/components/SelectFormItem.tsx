import { Field } from "formik";
import Label from "./Label";

type Option = { value: string; label?: string };

type Props = {
  name: string;
  placeholder: string;
  label: string;
  options: Option[];
};

const SelectFormItem = ({ name, placeholder, label, options }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <Label name={name} label={label} />
      <Field
        as="select"
        name={name}
        placeholder={placeholder}
        className="form-item col-span-2 rounded-md"
      >
        {options.map((option: Option, idx: number) => (
          <option key={idx} value={option.value}>
            {option?.label ?? option.value}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default SelectFormItem;
