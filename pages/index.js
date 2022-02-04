import Seo from "../components/common/Seo";
import Post from "../components/post/Post";
import Profile from "../components/profile/Profile";
import { getSortedPosts } from "../utils/posts";
import { generateRssPostsFeed } from "../utils/rss";

export default function Home({ posts }) {
  return (
    <section>
      <Seo title="All posts" />
      <Profile />

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPosts();
  generateRssPostsFeed(posts);

  return {
    props: {
      posts,
    },
  };
}
