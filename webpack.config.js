const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/App.jsx',
  mode: 'development',
  resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
		rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
		]
  },
  devServer: {
		port,
    // historyApiFallback: true,
    compress: true, 
	}
};