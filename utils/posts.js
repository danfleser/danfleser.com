import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";

export function getPostsFolders() {
  // Get all posts folders located in `public/posts`
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/public/posts`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.mdx`,
    }));

  return postsFolders;
}

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
}

export async function getSortedPosts() {
  const postFolders = getPostsFolders();

  const posts = [];
  for await (const post of postFolders) {
    const { filename, directory } = post;

    // Get raw content from file
    const markdownWithMetadata = fs
      .readFileSync(`public/posts/${directory}/${filename}`, "utf-8")
      .toString();

    // Parse markdown, get frontmatter data and content.
    const { data, content } = matter(markdownWithMetadata);

    posts.push({
      // Remove .mdx file extension from post name
      slug: filename.replace(".mdx", ""),
      frontmatter: {
        ...data,
        date: getFormattedDate(data.date),
        tags: data.tags.split(", ").map((t) => `#${t}`),
      },
      content: await serialize(content),
    });
  }

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}

export function getPostsSlugs() {
  const postFolders = getPostsFolders();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace(".mdx", ""),
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

  return { frontmatter, post: { content }, previousPost, nextPost };
}
