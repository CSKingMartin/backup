const path = require('path');

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
  // configuration for modules
  module: {
  	rules: [
  		// for js or jsx files...
  		{ test: /\.jsx?$/,
  			exclude: /node_modules/,
  			use: [
  				{ loader: 'react-hot-loader' },
  				{ loader: 'babel-loader' }
  			]
  		},
  		// for css files...
  		{ test: /\.css$/,
  			exclude: /node_modules/,
  			use: [
  				{ loader: 'style-loader' },
  				{ loader: 'css-loader',
  					options: { importLoaders: 1 } 
  				},
  				{ loader: 'postcss-loader' }
  			]
  		}
  	]
  },

  resolve: {
  	alias: {
  		Components: path.resolve(__dirname, 'src/components/')
  	}
  }
}
