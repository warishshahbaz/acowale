import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Pagination, Button, Spin } from "antd";
import Header from "./components/header";

// const articles = [
//   {
//     url: 'https://example.com/article1',
//     imageUrl: 'https://via.placeholder.com/300',
//     title: 'Article Title 1',
//     publishedAt: '2024-09-14',
//     description: 'This is a brief description of the article. It may be a bit long and needs to be truncated with a Show More/Show Less button.',
//   },
//   {
//     url: 'https://example.com/article2',
//     imageUrl: 'https://via.placeholder.com/300',
//     title: 'Article Title 2',
//     publishedAt: '2024-09-13',
//     description: 'Another description of an article. This one is also truncated with a Show More/Show Less button for demonstration purposes.',
//   },
//   // Add more articles as needed
// ];

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("in");
  const [language, setLanguage] = useState("hi");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleSubmit = () => {};
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     setLoading(true);
  //     try {
  //       // Build the query string manually
  //       const query = new URLSearchParams({
  //         search,
  //         country,
  //         language,
  //         page
  //       }).toString();

  //       // Construct the full URL with the query string
  //       const url = `http://localhost:5000/news?${query}`;

  //       const response = await axios.get(url);
  //       setArticles(response.data.articles);
  //       setTotal(response.data.totalResults);
  //     } catch (error) {
  // setError(error.message)
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, [search, country, language, page]);
  console.log(articles, "articles");

  return (
    <div className="">
      <Header
        setSearch={setSearch}
        search={search}
        setCountry={setCountry}
        country={country}
        language={language}
        setLanguage={setLanguage}
        handleSubmit={handleSubmit}
      />
      <section className="hero-section bg-gray-100 p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Top headlines</h2>
          {error ? (
            <div>{error}</div>
          ) : loading ? (
            <div className=" flex justify-center  ">
              <Spin size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div
                  key={article.url}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {article.publishedAt}
                    </p>
                    <p
                      className={`text-gray-700 mb-4 ${
                        expandedIndex === index
                          ? "line-clamp-none"
                          : "line-clamp-3"
                      }`}
                    >
                      {article.description}
                    </p>
                    <Button type="link" onClick={() => toggleExpand(index)}>
                      {expandedIndex === index ? "Show Less" : "Show More"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Pagination
        current={page}
        total={total}
        pageSize={10}
        onChange={(page) => setPage(page)}
        className="mt-4"
      />
    </div>
  );
}

export default App;
