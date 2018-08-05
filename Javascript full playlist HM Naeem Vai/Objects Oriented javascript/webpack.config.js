const path = require('path');

module.exports = {
    // this is for webpack config
    entry : './path/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : '/dist'
    },
    // this is for babel 
    module : {
        rules : [
            {
                test : /\.js$/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    }
};