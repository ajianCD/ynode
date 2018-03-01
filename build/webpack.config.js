//指定绝对路劲
const path = require('path')
/**
 *
 * @type {{entry: {app: *}, output: {filename: string}}}
 */
module.exports = {
    /**
     * 告诉webpack 该文件为程序入口，
     * 然后webpack会去找到app.js 又引用了哪些js ,然后找到所有需要打包的文件
     */
    entry: {
        app: path.join(__dirname,'../client/app.js')
    },
    /**
     * 指定打包到哪个文件
     * [name] entry配置中指定的文件名
     * [hash] 为每次打包生成的一个hash值，如果应用中有一个文件修改，这个hash就会从新生成，从而产生新的文件
     * 否则不打包新的文件。这样有利于浏览器缓存。
     *
     */
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname,'../dist'), //打包目录
        publicPath: '/public' //静态资源文件引用时的目录

    }
}