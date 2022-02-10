const path = require("path");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")();

const isDev = process.env.NODE_ENV !== "production";
module.exports = withPlugins([
  // [
  //   {
  //     webpack(config) {
  //       config.module.rules.push({
  //         test: /\.mp3$/,
  //         use: {
  //           loader: "file-loader",
  //         },
  //       });
  //       return config;
  //     },
  //   },
  // ],
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
  [
    optimizedImages,
    {
      assetPrefix: isDev ? "" : `/`,
      handleImages: ["jpeg", "jpg", "png", "svg"],
    },
  ],
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    esModule: true,
    images: {
      disableStaticImages: true,
      loader: "imgix",
      path: "",
    },
    trailingSlash: true,
    assetPrefix: isDev ? "" : `/`,
  },
]);
