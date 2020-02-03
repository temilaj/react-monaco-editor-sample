const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/App.jsx',
  mode: 'development',
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ttf$/i,
        use: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new MonacoWebpackPlugin()],
  devServer: {
    port,
    compress: true,
    publicPath: '/dist/'
  }
};
