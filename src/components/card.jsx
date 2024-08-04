import { useNavigate } from "react-router-dom";

const Card = ({ news }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border-0 rounded-none shadow-none"
      onClick={() => navigate(`/berita/${news.id}`)}
    >
      <div className="p-0">
        <img
          src={news.thumbnail}
          width={400}
          height={225}
          alt="News image not found"
          className="object-cover aspect-video w-full max-w-full"
        />
      </div>
      {/* Content Container */}
      <div className="px-4 pt-4 max-w-full">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-orange-500">
            {news.author}
          </div>
          <div className="text-sm text-gray-400">August 3, 2024</div>
        </div>
        <div className="text-lg font-bold">{news.title}</div>
        <div className="text-gray-400 line-clamp-5">{news.description}</div>
      </div>
    </div>
  );
};

export default Card;
