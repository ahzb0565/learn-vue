const path = require('path');
let openInEditor = require('launch-editor-middleware')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
        before(app){
            app.use('/__open-in-editor', openInEditor())
        }
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.vue$/, loader: 'vue-loader'},
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}