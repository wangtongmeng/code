const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        enforce: "pre", // 指定 loader的类型，有 pre前置 normal正常 post后置 inline内联
        options: { fix: true },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // 一些常用babel插件合集
            plugins: [
              // 不常用的单独加
              ["@babel/plugin-proposal-decorators", { legacy: true }], // legacy 老的
              [
                "@babel/plugin-proposal-private-property-in-object",
                { loose: true },
              ],
              ["@babel/plugin-proposal-private-methods", { loose: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.ico/,
        type: "asset/source",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.jpg/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 8080,
    open: true,
  },
};
