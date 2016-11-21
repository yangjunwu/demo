var path = require("path");

module.exports = {
	entry:"./src/main",
	output:{
		path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:"vue"},
			{test:/\.js$/,loader:"babel",include:[path.resolve(__dirname, './src')]},
			{test:/\.css$/,loader:"style!css!autoprefixer"},
			{test:/\.(png|jpg)$/,loader:"url-loader?limit=8192"},
			{test:/\.(html|tpl)$/,loader:"html-loader"}
		]
	},
	vue:{
		loaders:{
			css:"style!css!auto-prefixer"
		}
	},
	babel:{	
		presets: ['es2015'],
        plugins: ['transform-runtime']
	},
	resolve:{
		extensions: ['', '.js', '.vue'],
		alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
	},
	devtool: 'eval-source-map',
	externals: {
    	jquery: 'window.$'
	}


}


