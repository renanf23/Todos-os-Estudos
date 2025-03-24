const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            filename: "index.js",
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },
  output: {
    filename: "[name].min.js",
  },
  mode: "production",
};
