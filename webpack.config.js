const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   mode: "development" /* remove this code in production */,
   entry: "./src/index.js",
   output: {
      /* where the output bundle code file will saved */
      path: path.resolve(__dirname, "dist"),
      /* cache busting */
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
            test: /\.(png|jpe?g|gif)$/i,
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
};
