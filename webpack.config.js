const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production', // 或 'production'
    devtool: 'cheap-source-map', // 使用不依赖 eval 的 source map
    entry: {
        content: './src/content/content.js',
        background: './src/background/background.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/manifest.json', to: 'manifest.json' },
                // 如果有其他静态资源（如图标），也可以在这里复制
            ],
        }),
    ],
    // 可选：如果你使用现代 JavaScript 特性，可能需要 Babel
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ]
    // }
};