import Post from "../components/Post";

export default function Posts({ posts }) {
  return (
    <article>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </article>
  );
}
