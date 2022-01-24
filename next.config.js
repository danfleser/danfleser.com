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
    esModule: true,
    images: {
      disableStaticImages: true,
      loader: "imgix",
      path: "",
    },
    basePath: "/docs",
  },
]);
