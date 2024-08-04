import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader";
import BackToTop from "../components/BackToTop";

export default function Airports() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        `https://whitesky-server-40a153b2f506.herokuapp.com/news?page=${page}&size=6`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const filteredNews = data.news.filter(
        (news) => news.category === "Airports"
      );
      setNews((prevNews) => [...prevNews, ...filteredNews]);
      setHasMore(filteredNews.length > 0);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );

  if (error) return <h1 className="min-h-screen">{error}</h1>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <InfiniteScroll
          dataLength={news.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<BackToTop />}
        >
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 sm:p-6">
            {news.map((el, idx) => (
              <Card key={idx} news={el} />
            ))}
          </section>
        </InfiniteScroll>
      </main>
    </div>
  );
}
