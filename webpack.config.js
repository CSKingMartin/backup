const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: [
  	'./src/index.js'
  ], 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
  	contentBase: './dist/',
  	hot: true
  },
  module: {
	loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader'
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			},
		}]
	}
}
