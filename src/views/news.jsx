import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function News() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState({});

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        `https://whitesky-server-40a153b2f506.herokuapp.com/berita/${params.newsId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setNews(data.news);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1 className="min-h-screen">Loading...</h1>;
  if (error) return <h1 className="min-h-screen">{error}</h1>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="grid grid-cols-1 gap-4 p-4 sm:p-6">
          <div className="flex justify-start">
            <Link
              to="/"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              &lt; Back
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={news.thumbnail}
              alt="News Image"
              className="object-contain w-full lg:h-[60vh]"
            />

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-orange-500">
                  {news.author}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(news.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
              <div className="text-gray-500 mb-6">{news.category}</div>
              <div className="text-gray-500 leading-relaxed">
                <div className="text-gray-500 leading-relaxed">
                  {news.description
                    ?.replace(/\\n\\n/g, "\n\n")
                    .split("\n\n")
                    .map((paragraph, idx) => {
                      return (
                        <p key={idx} className="mb-4">
                          {paragraph}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
