import { Button, Typography } from "antd";
import React from "react";

const Header = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { Title } = Typography;
  return (
    <header className="relative">
      <div className="flex justify-end pt-2 pr-2">
        <Button onClick={() => setModalOpen(true)}>Preferences</Button>
      </div>
      <Title level={2} className="text-center my-0 pt-4">
        News Aggregator App
      </Title>
    </header>
  );
};

export default Header;
