const path = require("path");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")();

const isDev = process.env.NODE_ENV !== "production";
module.exports = withPlugins([
  [
    withMDX,
    {
      extension: /\.mdx?$/,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      pageExtensions: ["js", "jsx", "md", "mdx"],
    },
  ],
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    trailingSlash: true,
    basePath: isDev ? "" : "/danfleser-blog",
    assetPrefix: isDev ? "" : "/danfleser-blog/",
  },
]);
