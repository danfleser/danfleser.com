import Link from "next/link";

export default function Post({ post }) {
  return (
    <article className="app-post card">
      <section className=" w-full lg:max-w-full lg:flex">
        <section
          className="bg-center h-48 lg:h-auto lg:w-48 flex-none bg-cover"
          style={{
            backgroundImage:
              "url(" +
              require(`../../public/images/${post.frontmatter.cover_image}`) +
              ")",
          }}
          title={post.frontmatter.title}
        ></section>

        <section className="p-4 pr-0 flex flex-col justify-between leading-normal">
          <header className="mb-8">
            <h3>
              <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`}>
                <a className="title">{post.frontmatter.title}</a>
              </Link>
            </h3>
            <div className="date">{post.frontmatter.date}</div>
          </header>

          <footer className="flex items-center">
            <div className="text-sm">
              {post.frontmatter.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </section>
      </section>
    </article>
  );
}
