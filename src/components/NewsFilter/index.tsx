import { Button,Form, Input } from "antd";
import { FilterFormValues } from "src/utils/types";
import { dataSources, categories } from "src/utils/constants";
import CheckboxDropdown from "../CheckboxDropdown";
import { SearchOutlined } from "@ant-design/icons";

interface Props {
  handleSubmit: (values: FilterFormValues) => void;
}

const NewsFilter = ({ handleSubmit }: Props) => {
  return (
    <Form
      onFinish={handleSubmit}
      className="m-2 md:mx-0 grid grid-cols-2 md:flex flex-row md:justify-between gap-2"
    >
      <Form.Item name="keywords" className="flex-grow mb-0 col-span-2">
        <Input placeholder="Keywords" className="w-full" />
      </Form.Item>
      <CheckboxDropdown className="md:w-32 w-full" placeholder="Categories" name="categories" options={categories} />
      <CheckboxDropdown className="md:w-32 w-full" placeholder="Sources" name="sources" options={dataSources} />
      <Button icon={<SearchOutlined />} htmlType="submit" type="primary" className="bg-blue-500 col-span-2 md:w-32">
        Search
      </Button>
    </Form>
  );
};

export default NewsFilter;
