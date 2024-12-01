import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import NewsCard from "../../components/card/NewsCard";

const Home = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://673423afa042ab85d1190055.mockapi.io/api/v1/main").then((response) => {
      return response.json()
    }).then((data) => {
      setNews(data)
    })
  }, [])
  return (
    <>
      <Header />
      <main style={{width: "80vh", margin: "auto"}}>
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between", gap: "5px"}}>
          {news.length > 0 ? news.map((item) => (
            <NewsCard key={item.id} title={item.name} description={item.description} date={item.createdAt} />
          )): <div>Загрузка...</div>}
        </div>
      </main>
    </>
  )
}

export default Home;
