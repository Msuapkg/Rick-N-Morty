const path = require('path');

module.exports = (projectInfo) => {

    return {
        contentBase: path.join(projectInfo.dirname, `dist/${projectInfo.name}/`),
        open: true,
        port: 9999,
        hot: false,
        historyApiFallback: true,
        // proxy: {
        //     '/': {
        //         target: 'http://baidu.com',
        //         changeOrigin: true,
        //     }
        // }
    }
}