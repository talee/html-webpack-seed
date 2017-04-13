const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'web',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        overlay: true,
        watchOptions: {
            ignored: [/node_modules/, /dist/, '*.swp']
        },
        port: 9000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'file-loader'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/html/index.html'
    })],
    devtool: 'inline-source-map'
}
