const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        // 动态获取路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        module: {
            rules: [{
                test: /\.css$/i,
                // style-loader负责将样式添加到DOM中
                use: ["style-loader","css-loader"],
            }, ],
        },
    }
}