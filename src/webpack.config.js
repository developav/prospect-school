// webpack.config.js
module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            {test: /\.svg$/, use: 'svg-inline-loader'},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    }
}