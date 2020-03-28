

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/expenses-website/'
        : '/',
    lintOnSave: false,
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "[name]",
                include: ["./src/assets/icons"]
            })
            .end()
            .use('svgo-loader')
            .loader('svgo-loader')
            .end();
    }
};

// module.exports = {
//
//     chainWebpack: config => {
//         //path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
//         const dir = path.resolve(__dirname, 'src/assets/icons')//获取icons的路径
//
//         config.module
//             .rule('svg-sprite')
//             .test(/\.svg$/)
//             .include.add(dir).end()
//             .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false});
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//         config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}]);
//         config.module.rule('svg').exclude.add(dir)
//     }
// };
