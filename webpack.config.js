const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './client/index.tsx',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve('./client/index.html')
    })],
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
              test: /\.css$/i,
              use: [
                "style-loader",
                "css-loader",
              ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      // static: {
      //   directory: path.join('./client'),
      // },
      // compress: true,
      port: 8080,
      proxy: {
        '/api/**': {
          target: 'http://localhost:3000/',
          secure: false,
          hot: true,
          open: true,
        },
      }
    },
};