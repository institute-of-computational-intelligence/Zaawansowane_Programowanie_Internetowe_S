var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.join(__dirname,"./build/"),
        filename: "bundle.js"
    },
    watch:true,
    entry: {app:"./src/index.tsx"},
    resolve:{
        extensions: [".js",".ts", ".tsx"]
    },
    module:{
        rules:[
            {test:/\.ts(x?)$/, loader:"ts-loader", options: { allowTsInNodeModules: true }}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,'./build/'),
        port:9000
    },
    plugins:[
        new htmlWebpackPlugin({
            hash:true,
            title:"Nasza pierwsza aplikacja React",
            myPageHeader: 'Nasza pierwsza aplikacja react',
            template: './build/index.html',
            chunks: ['vendor','shared','app'],
            path: path.join(__dirname, "./build/"),
            filename:'index.html' 
        })
    ]
}