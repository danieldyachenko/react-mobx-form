const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] // Расширения, которые используются
    },
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, "public"), // Расположение статических файлов
        watchContentBase: true, // Изменение файлов вызывает полную перезагрузку страницы.
        compress: true, // Включить сжатие gzip
        hot: true, // Горячая замена модуля
        open: true,
        port: 9000,
        noInfo: true, // Только ошибки и предупреждения о горячей перезагрузке
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'public')
            }],
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
        })
    ],
};