const path = require("path");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  ],
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "assets/scss")],
    },
    images: {
      disableStaticImages: true,
      // loader: "imgix",
      // path: "",
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  },
]);
