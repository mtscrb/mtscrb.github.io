const webpack = require('webpack');

module.exports = {
    entry: `${__dirname}/index.js`,
    output: {
        path: `${__dirname}/build`,
        publicPath: '/build/',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map',
    },

    module: {
        rules: [ { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' } ],
    },

    plugins:
        process.argv.indexOf('-p') === -1
            ? []
            : [
                  new webpack.optimize.UglifyJsPlugin({
                      output: {
                          comments: false,
                      },
                  }),
              ],

    node: {
        fs: 'empty',
        child_process: 'empty',
    },
};
