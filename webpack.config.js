const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "./dist/[name].bundle.css",
  disable: process.env.NODE_ENV === "development"
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "index.html"
});

module.exports = {
  entry: ["./src/index.js", "./src/styles/main.scss"],
  output: {
    filename: "dist/bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: [
      path.join(__dirname, "dist"),
      path.join(__dirname, "src/content")
    ]
  },
  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],

    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  stats: {
         colors: true
     },
  devtool: 'source-map',
  plugins: [extractSass, htmlWebpackPlugin]
};
