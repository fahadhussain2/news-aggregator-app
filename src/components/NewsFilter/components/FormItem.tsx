import { Field } from "formik";
import Label from "./Label";
type Props = {
  name: string;
  placeholder: string;
  label: string;
  type?: string;
};

const FormItem = ({ name, placeholder, label, type }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <Label name={name} label={label} />
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        className="form-item col-span-2 rounded-md"
      />
    </div>
  );
};

export default FormItem;
