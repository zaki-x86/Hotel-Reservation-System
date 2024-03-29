const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   mode: "development",
   entry: {
      index: "./src/index.js",
      print: "./src/print.js",
   },
   devtool: "source-map",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.[contenthash].js",
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },
         {
            /*  keep the same exact order  */
            test: /\.css$/,
            use: [
               {
                  loader: "style-loader",
               },
               {
                  loader: "css-loader",
               },
            ],
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
               {
                  loader: "file-loader",
               },
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html",
      }),
   ],
   devServer: {
      historyApiFallback: true,
   },
};
