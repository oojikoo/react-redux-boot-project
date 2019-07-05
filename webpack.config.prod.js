const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
    // new webpack.optimize.UglifyJsPlugin(),
  ],
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [
      './node_modules',
      './functions',
    ],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow'
              ],
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
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow'
              ],
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
};
