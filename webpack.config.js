const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/ao3-comments-dropdown.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'ao3-comments-dropdown.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "*.js", context: "src/" }
            ],
        })
    ],
};