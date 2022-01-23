import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Highlight, { defaultProps } from "prism-react-renderer";
import Seo from "../../components/common/Seo";
import Profile from "../../components/profile/Profile";
import Image from "../../components/common/Image";
import { getPostBySlug, getPostsSlugs } from "../../utils/posts";

const theme = {
  plain: {
    color: "#2A2A2A",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },
  styles: [
    {
      types: ["prolog", "comment", "doctype", "cdata"],
      style: {
        color: "#B0BEC5",
      },
    },
    {
      types: ["property", "tag", "deleted", "constant", "symbol"],
      style: { color: "#f40088" },
    },
    {
      types: ["boolean", "number"],
      style: { color: "#FF9100" },
    },
    {
      types: ["attr-name", "tag"],
      style: { fontWeight: "700" },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#78909C",
      },
    },
    {
      types: [
        "operator",
        "entity",
        "url",
        "string",
        "variable",
        "language-css",
        "keyword",
      ],
      style: {
        color: "#651fff",
      },
    },
    {
      types: [
        "selector",
        "attr-name",
        "char",
        "builtin",
        "insert",
        "script-punctuation",
      ],
      style: {
        color: "#AA00FF",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["regex", "important"],
      style: {
        color: "#ffd700",
      },
    },
    {
      types: ["atrule", "function"],
      style: {
        color: "#3D5AFE",
      },
    },
    {
      types: ["symbol"],
      style: {
        opacity: "0.7",
      },
    },
    {
      types: ["string", "comment"],
      style: {
        fontWeight: 500,
      },
    },
  ],
};

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
        description={frontmatter.description || post.excerpt}
      />

      <article className="card">
        <header>
          <h1 className="post-title">{frontmatter.title}</h1>

          <p className="date">{frontmatter.date}</p>

          {frontmatter.cover_image && (
            <img src={frontmatter.cover_image} alt={post.slug}></img>
          )}
        </header>

        <section className="blog-content typography">
          <ReactMarkdown
            children={post.content}
            components={{ code: SyntaxHighlighterr, image: Image }}
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

const SyntaxHighlighterr = ({ inline, className, children }) => {
  const match = /language-(\w+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");
  return !inline && match ? (
    <>
      <section className="code-block-title">
        <div className="language">{match[1]}</div>
      </section>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language={match[1]}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })} className={className}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </>
        )}
      </Highlight>
    </>
  ) : (
    <code>{children}</code>
  );
};
