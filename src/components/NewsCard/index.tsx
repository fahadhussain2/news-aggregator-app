import { Space, Tag, Typography } from "antd";
import { truncateText } from "src/utils";
import { category } from "src/utils/constants";
import { NewsData } from "src/utils/types";

type Props = {
  data: NewsData;
};

const { Title, Paragraph } = Typography;

const NewsCard = ({ data }: Props) => {
  return (
    <div className="border rounded-md p-2 flex flex-col md:flex-row md:gap-2 hover:border-blue-500 hover:text-blue-500 hover:cursor-pointer">
      <img
        className="h-[150px] sm:h-[200px] md:h-[160px] rounded-md aspect-square object-cover mb-4 md:mb-0"
        src={
          data?.image_url ??
          "https://designshack.net/wp-content/uploads/placeholder-image.png"
        }
        alt={data.title}
      />
      <div className="w-full md:w-auto flex flex-col flex-grow">
        <Title level={3} className="font-bold text-xl md:text-2xl">
          {truncateText(data.title, 60)}
        </Title>
        <Space className="mb-4">
          {data.category?.map((cat: string, idx: number) => (
            <Tag key={idx}>{category[cat]}</Tag>
          ))}
        </Space>
        <Paragraph className="w-full text-black">
          {truncateText(data.description, 300)}
        </Paragraph>
      </div>
    </div>
  );
};

export default NewsCard;
