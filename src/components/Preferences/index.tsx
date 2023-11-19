import { App, Form, Input, Modal, Typography } from "antd";
import { useNewsPreferences } from "src/hooks/useNewsPreferences";
import { dataSources, categories } from "src/utils/constants";
import { NewsPreferences } from "src/utils/types";
import React from "react";
import CheckboxDropdown from "../CheckboxDropdown";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preferences = ({ modalOpen, setModalOpen }: Props) => {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const { preferences, setPreferences } = useNewsPreferences();

  const handleSubmit = async (values:NewsPreferences) => {
    setPreferences(values);
    message.success("Successfully updated your preferences");
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      open={modalOpen}
      onCancel={handleCancel}
      onOk={form.submit}
      okButtonProps={{
        className: "bg-blue-400",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={preferences}
        className="flex flex-col gap-2"
      >
        <Typography.Title level={3}>Preferences</Typography.Title>
        <Form.Item label="Keywords" name="keywords" className="mb-4">
          <Input placeholder="e.g. Bitcoin Football etc" />
        </Form.Item>
        <CheckboxDropdown
          name="categories"
          placeholder="Select Categories"
          options={categories}
          label="Categories"
          className="mb-4 w-full"
        />
        <CheckboxDropdown
          name="sources"
          placeholder="Select sources"
          options={dataSources}
          label="Sources"
          className="mb-4 w-full"
        />
      </Form>
    </Modal>
  );
};

export default Preferences;
