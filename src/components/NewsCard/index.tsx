import { NewsData } from "src/utils/types";

type Props = {
  data: NewsData;
};

const NewsCard = ({ data }: Props) => {
  return (
    <div className="border rounded-md p-2 flex flex-col md:flex-row md:gap-2 hover:border-blue-500 hover:text-blue-500 hover:cursor-pointer">
      <img
        className="h-[150px] sm:h-[200px] md:h-[160px] rounded-md aspect-square object-cover"
        src={data?.urlToImage ?? "https://designshack.net/wp-content/uploads/placeholder-image.png"}
        alt={data.title}
      />
      <div className="w-full">
        <h2 className="font-bold text-xl md:text-2xl">{data.title}</h2>
        <p className="text-black max-h-[72px] overflow-hidden">{data.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
