import fs from "fs";
import { Feed } from "feed";
import { getSiteMetaData } from "./helpers";

export function generateRssPostsFeed(posts) {
  const { title, url, language, author } = getSiteMetaData();

  const feed = new Feed({
    title,
    id: url,
    link: url,
    language,
    copyright: "Copyright © " + new Date().getFullYear() + " " + author.name,
    author: {
      name: author.name,
      link: author?.link,
    },
    feedLinks: {
      rss2: `${url}rss.xml`,
    },
  });

  posts.forEach(
    ({ frontmatter: { title, description, date }, content, slug }) => {
      feed.addItem({
        title,
        description,
        date: new Date(date),
        id: slug,
        link: `${url}posts/${slug}`,
        content: content,
      });
    }
  );

  // Write the RSS output to a public file, making it
  // accessible at url/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
  fs.writeFileSync("public/atom.xml", feed.atom1());
}
