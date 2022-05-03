import Post from "../../components/post/Post";
import SearchBar from "../../components/common/SearchBar";
import Seo from "../../components/common/Seo";
import Filter from "../../components/post/Filter";
import PostNoResults from "../../components/post/PostNoResults";
import { getSortedPosts, getAllTags } from "../../utils/posts";
import { generateRssPostsFeed } from "../../utils/rss";
import { generateSitemap } from "../../utils/sitemap-generator";

export default function Posts({ posts, tags }) {
  return (
    <article className="article-card">
      <Seo title="Posts" />

      <header className="article-card-header">
        <h1>📰 Posts</h1>

        <SearchBar></SearchBar>
      </header>

      <Filter tags={tags} />

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}

      <PostNoResults></PostNoResults>
    </article>
  );
}

export async function getStaticProps() {
  generateRssPostsFeed(await getSortedPosts(false));
  await generateSitemap();

  const posts = await getSortedPosts();

  return {
    props: {
      posts: posts,
      tags: getAllTags(posts),
    },
  };
}
