const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	//entry point: application starts exe and webpack starts the bundle
  entry: [
  	'./src/index.js'
  ], 
  //output options related to how/where webpack emits
  output: {
    path: path.resolve(__dirname, 'dist'), //destination directory
    filename: 'bundle.js' //name of file
  },
  devServer: {
  	contentBase: './dist/', //static file location
  	hot: true //hot module replacement
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
