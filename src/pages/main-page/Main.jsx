import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews, selectMainNews } from "../../store/store";
import Header from "../../components/header/Header";
import NewsCard from "../../components/cards/News";

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectMainNews);

  useEffect(() => {
    if (news.length === 0) {
      fetch("https://673423afa042ab85d1190055.mockapi.io/api/v1/main")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setNews(data));
        })
        .catch((error) => console.error("Error fetching news:", error));
    }
  }, [dispatch, news.length]);

  return (
    <>
      <Header />
      <main style={{ width: "80vh", margin: "auto" }}>
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between", gap: "5px" }}>
          {news.length > 0 ? (
            news.map((item) => (
              <NewsCard key={item.id} title={item.name} description={item.description} date={item.createdAt} />
            ))
          ) : (
            <div>Загрузка...</div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
