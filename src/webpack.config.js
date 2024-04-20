module.exports = {
    mode: "production",

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    module: {
        rules: [
            {
                test: /\.(scss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }, {
                test: /\.(webp)$/i,
                use: [
                    "url-loader"
                ]
            }
        ]
    },

    output: {
        filename: "ponyacha.js",
        library: "poNYACHA"
    }
};
