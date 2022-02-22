import Link from "next/link";
import PostDetails from "../common/PostDetails";

export default function Post({ post }) {
  return (
    <article
      className="app-post card"
      data-name={post.frontmatter.title}
      data-tags={post.frontmatter.tags}
    >
      <section className="app-post-content">
        <section className="app-post-image">
          <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`} passHref>
            <img
              alt={post.frontmatter.title}
              layout="fill"
              src={require(`../../public/images/${post.frontmatter.cover_image}`)}
            />
          </Link>
        </section>

        <section className="app-post-info">
          <header>
            <h1>
              <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`}>
                <a className="title">{post.frontmatter.title}</a>
              </Link>
            </h1>

            <PostDetails
              date={post.frontmatter.date}
              readingTime={post.frontmatter.readingTime}
            />
          </header>

          <footer>
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </footer>
        </section>
      </section>
    </article>
  );
}
