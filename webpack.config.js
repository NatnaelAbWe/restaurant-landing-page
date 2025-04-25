// webpack.config.js 

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { watch, watchFile } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    devtool: "eval-source-map",
    devServer:{
        watchFiles: ["./src/template.html"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/template.html",
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
        }),
    ],

    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    }
}

