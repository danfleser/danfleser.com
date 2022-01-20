import Link from "next/link";

export default function Post({ post }) {
  return (
    <section className="app-post card">
      {post.frontmatter.cover_image ? (
        <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
      ) : null}

      <Link href={`/blog/${post.slug}`}>
        <h3 className="title btn">{post.frontmatter.title}</h3>
      </Link>
      <div className="date">{post.frontmatter.date}</div>

      <p>{post.frontmatter.excerpt}</p>

      <div className="read-more">
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </section>
  );
}
