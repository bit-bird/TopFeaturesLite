var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry:['./ts-src/app.ts', './scss/main.scss'],
    output:{
        path:__dirname + '/build',
        filename:'app.js'
    },
    module:{
        rules:[{
            test:/\.ts$/,
            include: path.resolve(__dirname, 'ts-src'),
            use: 'ts-loader'
        },
        {
            test: /\.(css|sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
            })
          }
    ]
    },

    plugins: [
        new ExtractTextPlugin({ // define where to save the file
          filename: '[name].bundle.css',
          allChunks: true,
        }),
       // new UglifyJsPlugin(),
      ],

    resolve:{
        extensions:[ ".webpack.js", ".web.js", ".ts", ".js"]
    },

    watch: true

}
