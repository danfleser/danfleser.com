import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

import Seo from "../../components/common/Seo";
import Profile from "../../components/profile/Profile";
import { getPostBySlug, getPostsSlugs } from "../../utils/posts";

export default function PostPage({
  post,
  frontmatter,
  nextPost,
  previousPost,
}) {
  return (
    <section>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article className="card card-page">
        <header>
          <h1 className="post-title">{frontmatter.title}</h1>

          <p className="post-date">Posted on {frontmatter.date}</p>

          <img src={frontmatter.cover_image} alt={post.slug} />
        </header>

        <section className="prose prose-slate max-w-none">
          <ReactMarkdown
            className="post-body mb-4 prose lg:prose-lg dark:prose-dark"
            children={post.content}
            components={{ code: SyntaxHighlighterr }}
          />
        </section>

        <footer>
          <Profile />
        </footer>
      </article>

      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={"/posts/[slug]"} as={`/posts/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/posts/[slug]"} as={`/posts/${nextPost.slug}`}>
            <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
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
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={dracula} // try passing different color schemes, drak, dracula etc.
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code>{children}</code>
  );
};

const SyntaxHighlighterr = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");
  return !inline && match ? (
    <Highlight {...defaultProps} theme={theme} code={code} language={match[1]}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : (
    <code>{children}</code>
  );
};

const MarkdownImage = ({ alt, src }) => {
  return <Image alt={alt} src={src} placeholder="blur" className="w-full" />;
};
