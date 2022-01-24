const path = require("path");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [optimizedImages],
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "assets/scss")],
    },
    images: {
      loader: "imgix",
      path: "",
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  },
]);
