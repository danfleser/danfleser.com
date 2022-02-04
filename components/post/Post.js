import Link from "next/link";
import Image from "next/image";
import { getFormattedDate } from "../../utils/helpers";

export default function Post({ post }) {
  return (
    <article
      className="app-post card"
      data-name={post.frontmatter.title}
      data-tags={post.frontmatter.tags}
    >
      <section className=" w-full md:max-w-full md:flex">
        <section className="h-48 md:h-auto md:w-64 flex-none relative">
          <img
            className="rounded-lg overflow-hidden"
            alt={post.frontmatter.title}
            // placeholder="blur"
            layout="fill"
            objectFit="cover"
            src={require(`../../public/images/${post.frontmatter.cover_image}`)}
          />
        </section>
        <section className="p-4 pr-0 flex flex-col justify-between leading-normal">
          <header>
            <h3>
              <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`}>
                <a className="title">{post.frontmatter.title}</a>
              </Link>
            </h3>
            <div className="date">
              {getFormattedDate(post.frontmatter.date)}
            </div>
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
