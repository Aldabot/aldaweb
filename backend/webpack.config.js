const path = require('path');
const slsw = require('serverless-webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    plugins: [
        new copyWebpackPlugin([
            {
                from: '.env',
                flatten: true
            }
        ]),
    ]
};
