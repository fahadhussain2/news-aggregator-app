type Props = {
  name: string;
  label: string;
};

const Label = ({name, label}: Props) => {
  return (
    <label htmlFor={name} className="col-span-1 px-2 pt-2 text-white font-medium">
      {label}
    </label>
  );
};

export default Label;
