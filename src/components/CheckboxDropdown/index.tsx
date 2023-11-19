import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Dropdown, Form, MenuProps, Typography } from "antd";
import { useState, useRef } from "react";

const { Paragraph } = Typography;

type Options = {
  value: string;
  label?: string;
};

type Props = {
  name: string;
  options: Options[];
  label?: string;
  placeholder: string;
  className?: string;
};

const CheckboxDropdown = ({
  options,
  name,
  label,
  placeholder,
  className,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLAnchorElement>(null);
  const items: MenuProps["items"] = options.map((cat) => ({
    key: cat.value,
    label: (
      <Form.Item
        name={[name, cat.value]}
        className={`mb-0`}
        valuePropName="checked"
      >
        <Checkbox
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-full"
        >
          {cat?.label ?? cat?.value}
        </Checkbox>
      </Form.Item>
    ),
  }));

  const handleVisibleChange = (visible: boolean) => {
    setOpen(visible);
  };
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      open={open}
      onOpenChange={handleVisibleChange}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`w-32 ${className ?? ""}`}
        ref={dropdownRef}
      >
        {label && <Paragraph className="mb-1">{label}</Paragraph>}
        <div className="bg-white text-gray-300 px-2 rounded-md py-1 border w-full flex justify-between">
          <Paragraph className="mb-0 text-neutral-300 font-light">
            {placeholder}
          </Paragraph>
          <DownOutlined />
        </div>
      </a>
    </Dropdown>
  );
};

export default CheckboxDropdown;
