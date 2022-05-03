import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";

export function getPostsFolders() {
  // Get all posts folders located in `public/posts`
  const posts = fs
    .readdirSync(`${process.cwd()}/public/posts`)
    .map((fileName) => ({
      fileName,
    }));

  return posts;
}

export async function getSortedPosts(serialized = true) {
  const postsMdx = getPostsFolders();

  const posts = [];
  for await (const post of postsMdx) {
    const { fileName } = post;

    // Get raw content from file
    const markdownWithMetadata = fs
      .readFileSync(`public/posts/${fileName}`, "utf-8")
      .toString();

    // Parse markdown, get frontmatter data and content.
    const { data, content } = matter(markdownWithMetadata);

    posts.push({
      // Remove .mdx file extension from post name
      slug: fileName.replace(".mdx", ""),
      frontmatter: {
        ...data,
        date: data.date,
        tags: data.tags.split(", ").map((t) => `#${t}`),
        readingTime: getReadingTime(content),
      },
      content: serialized ? await serialize(content) : content,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}

export function getPostsSlugs() {
  const postsMdx = getPostsFolders();

  const paths = postsMdx.map(({ fileName }) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return paths;
}

export async function getPostBySlug(slug) {
  const posts = await getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, slug, post: { content }, previousPost, nextPost };
}

export function getReadingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;

  return Math.ceil(words / wpm);
}

export function getAllTags(posts) {
  const tags = [];

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      if (!tags.find((t) => t === tag)) {
        tags.push(tag);
      }
    });
  });

  return tags.sort((a, b) => a.localeCompare(b));
}

export function getShortArticles() {
  const data = fs.readFileSync(
    `${process.cwd()}/scripts/short-articles/articles.json`
  );

  return JSON.parse(data).filter(
    (v, i, a) => a.findIndex((v2) => v2.title === v.title) === i
  );
}
