import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const ArticlesPage = () => {
  const { id } = useParams();
  console.log("param", id);
  const url = `http://localhost:4000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  console.log(article);
  return (
    <div className="articlesContainer">
      {isPending && <h1>Wait a second...</h1>}
      {error && <h1>{error}</h1>}
      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>By {article.author}</p>
          <p>{article.content}</p>
        </div>
      )}
    </div>
  );
};
