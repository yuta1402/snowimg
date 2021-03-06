const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mainConfig = {
  target: "electron-main",
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: {
    main: "./src/main/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: "ts-loader",
      },
    ],
  },
  devtool: "source-map",
  watchOptions: {
    poll: true,
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: "img/", to: "img/" }] }),
  ],
};

const rendererConfig = {
  target: "electron-renderer",
  entry: {
    index: "./src/renderer/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true,
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "css, scss"],
  },
  devtool: "source-map",
  watchOptions: {
    poll: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "bundles.css",
    }),
  ],
};

module.exports = [mainConfig, rendererConfig];
