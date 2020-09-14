const path = require("path")
const webpack = require("webpack")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        // publicPath: '/',
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
        port: 4200,
        // noInfo: true, // Только ошибки и предупреждения о горячей перезагрузке
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
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
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/robots.txt' },
                { from: 'public/favicon.ico' },
                { from: 'public/manifest.json' }
            ]
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
        })
    ],
};