const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./sample/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  devtool: "source-map",
  devServer: {
    open: true,
    disableHostCheck: true,
    host: "localhost",
    hot: true,
    inline: true,
    port: 5050,
    stats: "errors-warnings",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      }
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
