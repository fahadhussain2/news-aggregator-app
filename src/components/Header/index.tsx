import { Button, Typography, Layout } from "antd";
import React from "react";

const Header = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { Title } = Typography;
  return (
    <Layout.Header className="flex justify-between items-center">
      <Title level={4} className="text-white mt-2">
        News Aggregator App
      </Title>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Preferences
      </Button>
    </Layout.Header>
  );
};

export default Header;
