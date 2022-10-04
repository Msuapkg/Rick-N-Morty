const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    splitChunks: {
        chunks: 'all',
        minSize: 0,
        minChunks: 1,
                 maxAsyncRequests: 5, // Número máximo de solicitudes paralelas cargadas bajo demanda
                 maxInitialRequests: 3, // Número máximo de solicitudes paralelas para una entrada
                 automaticNameDelimiter: '-', // Conector para nombre de archivo
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
            },
            default: {
                minChunks: 2,
                reuseExistingChunk: true,
            },
        },

    },
    runtimeChunk: {
        name: entryPoint => `manifest.${entryPoint.name}`,
    },
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                output: {
                    comments: false,
                },
                ie8: false,
            }
        })
    ]
}