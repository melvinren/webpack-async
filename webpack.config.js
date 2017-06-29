var path = require('path');
var webpack = require('webpack');



module.exports= {
	entry: {
		bundle1: './src/index.js',
		bundle2: './src/index-es2015.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: 'chunk/[id].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		hot: true,
		publicPath: '/',
		compress: true,
		port: 9000
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules:[{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				options:{
					presets:[['es2015', {modules:false}]],
					plugins: ['syntax-dynamic-import']
				}
			}]
		}]
	}
}