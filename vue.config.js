const path = require("path");
const resolve = function(dir) {
    return path.join(__dirname, dir);
};
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "./",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: true, // 是否开启eslint保存检测
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    chainWebpack: config => {
        config.resolve.alias
        .set("@", resolve("src"))
        .set("@v", resolve("src/views"))
        .set("@c", resolve("src/components"))
        .set("@u", resolve("src/utils"))
        .set("@s", resolve("src/service")); /* 别名配置 */
        config.optimization.runtimeChunk("single");
    },
    devServer: {
        // host: "localhost",
        /* 本地ip地址 */
        //host: "192.168.1.63",
        //host: "172.16.48.137", //局域网和本地访问
        port: "8000",
        hot: true,
        /* 自动打开浏览器 */
        open: true,
        overlay: {
            warning: false,
            error: true
        },
        /* 跨域代理 */
        proxy: {
            "/api": {
                /* 目标代理服务器地址 */
                target: "http://192.168.1.63:8052", //
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};