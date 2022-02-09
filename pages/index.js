import Seo from "../components/common/Seo";
import Filter from "../components/post/Filter";
import Post from "../components/post/Post";
import PostNoResults from "../components/post/PostNoResults";
import Profile from "../components/profile/Profile";
import { getSortedPosts, getAllTags } from "../utils/posts";
import { generateRssPostsFeed } from "../utils/rss";

export default function Home({ posts, tags }) {
  return (
    <section>
      <Seo title="All posts" />

      <Profile />

      <Filter tags={tags} />

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}

      <PostNoResults></PostNoResults>
    </section>
  );
}

export async function getStaticProps() {
  generateRssPostsFeed(await getSortedPosts(false));

  const posts = await getSortedPosts();

  return {
    props: {
      posts: posts,
      tags: getAllTags(posts),
    },
  };
}
