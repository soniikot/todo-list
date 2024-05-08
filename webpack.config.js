const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV ?? "development";
const isWatch = process.env.NODE_ENV === "development" ? true : false;

module.exports = {
  mode: mode,
  entry: {
    index: "./src/index.js",
  },
  watch: isWatch,
  plugins: [
    new HtmlWebpackPlugin({
      title: "ToDoList",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
