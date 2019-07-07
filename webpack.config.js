const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
    overwrite: true
});
const env = Object.keys(process.env).reduce((acc, curr) => {
    acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
    return acc;
}, {});
module.exports = {
    entry: [
        '@babel/polyfill','./src/App.tsx'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!index.html'],
        }),
        new webpack.DefinePlugin(env),
        new CopyPlugin([
            {
                from: 'build/',
                to: '',
                force: true,
            },
        ]),
    ],
    resolve: {
        modules: [
            './node_modules',
        ],
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    devServer: {
        contentBase: __dirname + '/dist/',
        inline: true,
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                                '@babel/plugin-proposal-function-sent',
                                '@babel/plugin-proposal-export-namespace-from',
                                '@babel/plugin-proposal-numeric-separator',
                                '@babel/plugin-proposal-throw-expressions',
                                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        'helpers': true,
                                        'regenerator': false
                                    }
                                ]
                            ]
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.js(x?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-flow'
                            ],
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        'helpers': true,
                                        'regenerator': false
                                    }
                                ]
                            ]
                        },
                    },
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
};
