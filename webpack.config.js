const webpack = require("webpack");

const path    = require('path');
const hwp     = require('html-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/assets/';

module.exports = {
    entry: path.join(__dirname, '/app/src/index.tsx'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module:{
        rules:[
            {
                test: /\.(tsx|ts)?$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },

            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/app/src/index.html')}),
        // This makes it possible for us to safely use env vars on our code
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}