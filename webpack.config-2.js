const path = require('path');

module.exports = {
    entry: './src/ao3-kudos-comment.ts',
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
        filename: 'ao3-kudos-comment.js',
        path: path.resolve(__dirname, 'dist'),
    }
};