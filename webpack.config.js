const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    // publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, /// -????
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    // host: 'localhost',
    // contentBase: path.join(__dirname, '/'),
    proxy: {
      '/feed': 'http://localhost:3000',
    },
    publicPath: '/build',
    compress: true,
    port: 8080,
    // hot: true
    // lazy: true,
    // filename: 'bundle.js'
  }
}
