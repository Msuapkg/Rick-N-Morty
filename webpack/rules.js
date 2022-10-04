const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = () => {
    return [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader'
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssPlugin.loader
                },
                {
                                         loader: "css-loader", // Permitir importar un archivo css en js e importar el archivo css como un módulo
                },
                {
                                         loader: "sass-loader" // compila sass en css
                },
                {
                    loader: "postcss-loader"
                }
            ]
        },
        {
                         prueba: /\.(gif|png|jpg|woff|svg|ttf|eot)$/,// Procesamiento de imágenes
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10,
                                                 outputPath: 'images /', // especifica la ubicación de la imagen empaquetada
                        name: '[name].[ext]',
                        publicPath: '../images'
                    }
                }
            ]
        },
    ];
}