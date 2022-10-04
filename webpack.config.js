let entry = require('./webpack/entry.js');
let output = require('./webpack/output.js');
let rules = require('./webpack/rules.js');
let plugins = require('./webpack/plugins.js');
let optimization = require('./webpack/optimization');
let devServer = require('./webpack/devServer.js');

const ENV = process.env.NODE_ENV.split('::');

const projectInfo = {
    dirname: __dirname,
    name: 'reactTest',
    mode: ENV[0]
}

module.exports = {
    mode: projectInfo.mode,
    devtool: '#cheap-module-eval-source-map',
    entry: entry,
    output: output(projectInfo),
    module: {
        rules: rules()
    },
    plugins: plugins(projectInfo),
    optimization: optimization,
    devServer: devServer(projectInfo),
}