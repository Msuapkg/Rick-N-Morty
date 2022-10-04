const path = require('path');

module.exports = (projectInfo) => {
    return {
        filename: 'js/[name].[hash:4].js',
        path: path.resolve(projectInfo.dirname, `dist/${projectInfo.name}`)
    };
}