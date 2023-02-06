import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTheme } from "../hooks/useTheme";

export const HomePage = () => {
  const url = "http://localhost:4000/articles/";
  const { data: articles, isPending, error } = useFetch(url);
  const { mode } = useTheme();

  const deleteHandler = async (articleId) => {
    await fetch(url + articleId, { method: "DELETE" });
    console.log("deleted");
  };

  return (
    <div className={`homeContainer ${mode}`}>
      <h1>My Articles</h1>
      {isPending && <h3>Wait a second!</h3>}
      {error && <h3>{error}</h3>}
      {articles &&
        articles.reverse().map((article) => (
          <div className="article" key={article.id}>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <div>
              <Link className={`link ${mode}`} to={`/articles/${article.id}`}>
                Read more...
              </Link>
              <button
                className={`delete ${mode}`}
                onClick={(e) => {
                  e.target.parentNode.parentNode.remove();
                  deleteHandler(article.id);
                }}
              >
                Delete this Article
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
