const path = require("path");
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /** vue3.0内置了webpack所有东西，
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ["./src/icons"]
      });
  },
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"], // 自动添加文件名后缀
      alias: {
        vue: "vue/dist/vue.js",
        "@": path.resolve(__dirname, "./src"),
        "@c": path.resolve(__dirname, "./src/components")
      }
    };
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
    devServer: {
            open: false, //浏览器自动打开页面
            port: 8080,
            https: false,
            hot: true,
            hotOnly: false, //热更新（webpack已实现了，这里false即可）
            proxy: {
                //配置跨域
                '/__api__': {
                        // target: "http://127.0.0.1:9999/drftest/show",
                        target: "http://www.web-jshtml.cn/productapi",
                        ws:true,
                        changOrigin: true,
                        pathRewrite: {
                            '^/__api__': ''  //正则匹配到request那个api
                        }
                    }

        },
        overlay:{
           warnings:true,  //在全屏模式下是否显示脚本错误
           errors: true,
        },
    before: app=> {
    }
    },

    //
    // // 是否为 Babel 或 TypeScript 使用 thread-loader
    // parallel: require('os').cpus().length > 1,
    // // 向 PWA 插件传递选项
    // pwa: {},
    // 可以用来传递任何第三方插件选项
    pluginOptions: {}
}