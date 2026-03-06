const path = require('path');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const icon = path.join(__dirname, 'icon.png')
const SpeedMeasureWebpack5Plugin = require('speed-measure-webpack5-plugin');
const smw = new SpeedMeasureWebpack5Plugin();
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const bootstrap = path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css');
const HtmlWebpackPugin = require('html-webpack-plugin')
const loadersPath = path.resolve(__dirname, 'loaders')
const webpack = require('webpack');
let HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
// 因为CSS和JS的加载可以并行，所以可以通过此插件提取CSS成单独的文件，然后去掉无用的CSS并进行压缩
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const fs = require('fs');

// global.sync(`${PATHS.src}/**/*`, {nodir: true})
const glob = require('glob') // 文件匹配模式
const PATHS = {
    src: path.resolve(__dirname, 'src')
}

// 可以读取.env文件，获取里面的值，设置到process.env.NODE_ENV里面
require('dotenv').config();
// let env = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.env'), 'utf8'))
// for (let key in env)
//         process.env[key] = env[key];
console.log('webpack.config.js process.env.NODE_ENV', process.env.NODE_ENV); // undefined
// console.log("NODE_ENV", NODE_ENV) // ReferenceError: NODE_ENV is not defined
// module.exports = smw.wrap({


module.exports = (env={}) => {
    console.log('webpack.config.js env', env);
    
    return {
        mode: env.development ? 'development' : 'production',
        devtool: 'source-map', // 调试工具选择
        context: process.cwd(), // 上下文目录
        entry: './src/index.js',
        optimization: {
            minimize: true, // 开启最小化
            minimizer: [
                new TerserPlugin(), // 压缩JS
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'), // 输出路径
            filename: '[name].js' // 输出文件名
        },
        resolve: { // 找普通模块
            extensions: ['.js', '.jsx', '.json'], // 指定文件扩展名左边的优先级更高，先找js文件，找不到再往后找
            alias: { // 指定查找别名
                bootstrap,
            },
            modules: ["c:/node_modules", "node_modules"], // 指定查找目录
            mainFields: ['browser', 'module', 'main'], // 从package.json中的哪个字段查找入口文件
            mainFiles: ['index'], // 如果找不到mainFields的话，会找索引文件，index.js
        },
        resolveLoader: { // 找loader，只对loader有用
            // 内部字段和resolve一样
            modules: [loadersPath, 'node_modules']
        },
        externals: {
            jquery: 'jQuery' // 项目中引入jquery，会去找window.jQuery
        },
        module: {
            // 如果模块的路径匹配此正则的话，就不需要去查找里面的依赖项 requrie import
            noParse: /title.js/,
            rules: [
                {
                    oneOf: [ // oneOf 只可能匹配数组中的某一个，找到一个不再继续查找剩下的
                        {
                            test: /\.js$/,
                            include: path.resolve(__dirname, "src"),
                            exclude: /node_modules/, // 不解析 node_modules
                            use: [
                                // thread-loader开启线程池，开线程和线程通信都需要时间，适合资源很多的项目
                                {
                                    loader: 'thread-loader',
                                    options: { workers: 3 } // 数量cpu核数-1
                                },
                                {
                                    loader: 'babel-loader',
                                    options: {
                                        cacheDirectory: true
                                    }
                                },
                            ]
                        },
                        {
                            test: /\.css$/,
                            use: [
                                // 'cache-loader',
                                // 'logger-loader',
                                // 'style-loader',
                                MiniCssExtractPlugin.loader,
                                'css-loader',
                            ]
                        },
                        {
                            test: /\.less$/,
                            use: [
                                // 'style-loader',
                                // 'css-loader',
                                MiniCssExtractPlugin.loader,
                                'less-loader'
                            ]
                        },
                        {
                            // https://www.npmjs.com/package/image-webpack-loader  参考配置用力改
                            test: /\.jpg|png|gif|bmp$/,
                            use: [
                                {
                                    loader: 'image-webpack-loader',
                                    options: {
                                        mozjpeg: {
                                            progressive: true,
                                        },
                                        // optipng.enabled: false will disable optipng
                                        optipng: {
                                            enabled: false,
                                        },
                                        pngquant: {
                                            quality: [0.65, 0.90],
                                            speed: 4
                                        },
                                        gifsicle: {
                                            interlaced: false,
                                        },
                                        // the webp option will enable WEBP
                                        webp: {
                                            quality: 75
                                        }
                                    }
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPugin({
                template: './src/index.html',
                minify: { // 压缩html
                    collapseWhitespace: true, // 去掉空格
                    removeComments: true, // 去掉注释
                }
            }),
            new webpack.IgnorePlugin({
                // 打包忽略 moment下的locale
                resourceRegExp: /^\.\/locale$/, // 资源正则
                contextRegExp: /moment$/ // 上下文，目录正则
            }),
            // new HardSourceWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin(), // 压缩css
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new PurgeCSSPlugin({
                paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }) // 净化src下的所有文件 **匹配任意字符，包含路径分隔符，*匹配任意字符，不包含路径分隔符
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // 注意用双引号引起来，否则就变成变量了
                'NODE_ENV': JSON.stringify('production'),
                "ENVIRONMENT": JSON.stringify("development"),
            })
            // new FriendlyErrorsWebpackPlugin({
            //     onErrors: (severity, errors) => {
            //         let error = errors[0]
            //         notifier.notify({
            //             title: 'webpack编译失败',
            //             message: severity + ":" + error.name,
            //             subtitle: error.file || '',
            //             icon
            //         })
            //     }
            // }),
            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'disabled', // 不启动展示打包报告的HTTP服务器
            //     generateStatsFile: true // 要生成stats.json描述文件
            // }),

        ]
        // });
    }
};

