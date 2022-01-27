const path = require("path");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

const isDev = process.env.NODE_ENV !== "production";
module.exports = withPlugins([
  [
    optimizedImages,
    {
      assetPrefix: isDev ? "" : "/danfleser-blog/",
    },
  ],
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "assets/scss")],
    },
    esModule: true,
    images: {
      disableStaticImages: true,
      loader: "imgix",
      path: "",
    },
    trailingSlash: true,
    basePath: isDev ? "" : "/danfleser-blog",
    assetPrefix: isDev ? "" : "/danfleser-blog/",
  },
]);
