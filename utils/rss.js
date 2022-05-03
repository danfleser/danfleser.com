import fs from "fs";
import { Feed } from "feed";
import { getSiteMetaData } from "./helpers";
import { getShortArticles } from "./posts";

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
  getShortArticles().forEach(({ title, description }) => {
    feed.addItem({
      title,
      description,
      date: new Date(),
      id: title.replaceAll(" ", "_"),
      link: `${url}articles/nice-to-read?article=${title.replaceAll(" ", "_")}`,
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at url/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
  fs.writeFileSync("public/atom.xml", feed.atom1());
}
