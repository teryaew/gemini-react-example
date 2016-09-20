const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, '.build'),
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-decorators-legacy'],
                    presets: ['react', 'es2015', 'stage-0']
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader'
            }
        ],
    },
    postcss: function() {
        return [
            require('autoprefixer')({
                browsers: [
                    'last 2 versions',
                    'ie 10',
                    'ff 24',
                    'android 4',
                    'ios >= 5'
                ]
            }),
            require('postcss-nested')
        ];
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template.html'
        })
    ]
};
