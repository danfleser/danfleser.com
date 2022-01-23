import Link from "next/link";

export default function Post({ post }) {
  return (
    <article className="app-post card">
      <header>
        {post.frontmatter.cover_image ? (
          <img
            src={post.frontmatter.cover_image}
            alt={post.frontmatter.title}
          />
        ) : null}

        <h3 className="btn">
          <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`}>
            <a className="title">{post.frontmatter.title}</a>
          </Link>
        </h3>
        <div className="date">{post.frontmatter.date}</div>
      </header>

      <section>
        <p>{post.frontmatter.excerpt}</p>
      </section>
    </article>
  );
}
