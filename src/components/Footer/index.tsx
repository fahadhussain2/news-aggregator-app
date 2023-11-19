import { Typography } from "antd";

const Footer = () => {
  const { Paragraph } = Typography;
  return (
    <footer>
      <Paragraph className="my-2 text-center">News Aggregator App | Powered by NewsData API</Paragraph>
    </footer>
  );
};

export default Footer;
