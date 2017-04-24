var HtmlWebpackPlugin = require('html-webpack-plugin')

var isProduction = process.env.NODE_ENV === 'production'

var productionConfig = {}
if (isProduction) {
    productionConfig = {
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
    }
}

//配置页面
module.exports = [
    new HtmlWebpackPlugin(Object.assign({}, {
        filename: 'index.html',
        template: 'src/page/index.html',
        inject: true
    }, productionConfig))
]