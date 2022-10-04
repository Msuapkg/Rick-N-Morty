const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCssSprite = require('webpack-css-sprite');

module.exports = (projectInfo) => {
    const result = [
        new CleanWebpackPlugin(),
                 // Introduce html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(projectInfo.dirname, 'index.html'),
            publicPath: './'
        }),
        new MiniCssPlugin({
            filename: './css/style.css'
        }),
        new CopyWebpackPlugin([
                         // copia datos simulados
            { from: path.join(projectInfo.dirname, '/src/api'), to:  path.join(projectInfo.dirname, 'dist', projectInfo.name, '/api')},
        ])
    ];

    if (projectInfo.mode !== 'development') {
        result.push(new CopyWebpackPlugin([
            { from: path.join(projectInfo.dirname, '/src/images/sprite'), to: path.join(projectInfo.dirname, 'dist', projectInfo.name, '/images/sprite') },
        ]));
        result.push(new WebpackCssSprite({
            cssPath: projectInfo.dirname + '/dist/' + projectInfo.name + '/css/',
            spritePath: projectInfo.dirname + '/dist/' + projectInfo.name + '/images/sprite/',
            spriteSheet: projectInfo.dirname + '/dist/' + projectInfo.name + '/images/sprite/icon.png',
            pathToSpriteSheetFromCSS: '../images/sprite/icon.png',
            spritesmithOptions: {
                padding: 10
            },
            matchReg: /\.\.\/images\//
        }));
    }
    return result;
}