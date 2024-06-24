import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function ArticlesDetail() {
  const { id } = useParams();
  const url =
    "https://online-json-server-api.up.railway.app/project/66788d2e1d2cd3eb1143fdf0/articles" +
    id;
  const { data: article, error, isPending } = useFetch(url);
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {article && (
        <>
          <h2>Title: {article.data.title}</h2>
          <p>
            Author: <i>{article.data.author}</i>
          </p>
          <p>{article.data.body}</p>
        </>
      )}
    </div>
  );
}

export default ArticlesDetail;
