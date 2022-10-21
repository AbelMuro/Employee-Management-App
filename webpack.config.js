const path = require('path');         
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

    entry: './src/index.js',                 
    output: {                                              
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'                
    },
    plugins: [                      
        new HtmlWebpackPlugin({               
            filename: 'index.html',         
            template: './src/index.html'      
        })
    ],
    devServer: {
        historyApiFallback: true            //this property helps with routing requests on the front end
    },                                      //instead of making a server request, react will make a client side routing
    module: {                               //request everytime you refresh the page
        rules: [                               
            {                                   
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',  
                    options: {presets: ['@babel/preset-env', '@babel/preset-react']} 
                }                                                                
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]             
            },
            {
                test: /\.(png|jpeg|webp|mp4|wav)$/,
                type: 'asset/resource'                                             
            },                                                                     
        ]
    },
}