import Post from "../../components/post/Post";
import SearchBar from "../../components/common/SearchBar";
import Seo from "../../components/common/Seo";
import PostNoResults from "../../components/post/PostNoResults";
import { getShortArticles } from "../../utils/posts";

export default function NiceToRead({ shortArticles }) {
  return (
    <article className="article-card">
      <Seo title="Nice to read" />

      <header className="article-card-header">
        <h1>📖 Nice to read</h1>

        <SearchBar></SearchBar>
      </header>

      {shortArticles.map((article) => (
        <Post key={article.articleUrl} post={article} shortArticle={true} />
      ))}

      <PostNoResults></PostNoResults>
    </article>
  );
}

export async function getStaticProps() {
  return {
    props: {
      shortArticles: await getShortArticles(),
    },
  };
}
