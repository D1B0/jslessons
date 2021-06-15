const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode : "development",
    entry : path.resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: "main.bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template:  path.resolve(__dirname,"index.html")
    })

    ],
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg|xml|mp3)?$/i,
                use: "file-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

        ]
    },
}