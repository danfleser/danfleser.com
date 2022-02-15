import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import Seo from "../../components/common/Seo";
import ResponsiveImage from "../../components/common/Image";
import Profile from "../../components/profile/Profile";
import Comments from "../../components/common/Comments";
import PostDetails from "../../components/common/PostDetails";
import { getPostBySlug, getPostsSlugs } from "../../utils/posts";

export default function PostPage({
  post,
  frontmatter,
  nextPost,
  previousPost,
}) {
  return (
    <section className="blog-post">
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        type="article"
        thumbnail={`images/${frontmatter.cover_image}`}
        path={`posts/${post.slug}`}
        keywords={post.tags}
      />

      <article className="card">
        <header>
          <h1 className="post-title">{frontmatter.title}</h1>

          <PostDetails
            date={frontmatter.date}
            readingTime={frontmatter.readingTime}
          />

          {frontmatter.cover_image && (
            <ResponsiveImage
              src={require("../../public/images/" + frontmatter.cover_image)}
              alt={post.slug}
            ></ResponsiveImage>
          )}
        </header>

        <section className="blog-content typography">
          <MDXRemote
            {...post.content}
            components={{
              code: SyntaxHighlighter,
              inlineCode: SyntaxHighlighter,
              img: ResponsiveImage,
            }}
          />
        </section>
      </article>

      <Profile />

      <nav>
        {previousPost ? (
          <Link href={"/posts/[slug]"} as={`/posts/${previousPost.slug}`}>
            <a>← {previousPost.frontmatter.title}</a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/posts/[slug]"} as={`/posts/${nextPost.slug}`}>
            <a>{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>

      <Comments />
    </section>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = await getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const SyntaxHighlighter = ({ inline, className, children }) => {
  const match = /language-(\w+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");
  return !inline && match ? (
    <section className="syntax-highlighter">
      <div className="window-bar">
        <div className="windows-buttons">
          <div className="window-btn btn-close"></div>
          <div className="window-btn btn-minimize"></div>
          <div className="window-btn btn-zoom"></div>
        </div>
        <section className="code-block-title">
          <div className="language">{match[1]}</div>
        </section>
      </div>

      <div>
        <Highlight
          {...defaultProps}
          code={code}
          language={match[1]}
          theme={theme}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className={className}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </>
          )}
        </Highlight>
      </div>
    </section>
  ) : (
    <code>{children}</code>
  );
};
