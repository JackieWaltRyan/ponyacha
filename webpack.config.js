let path = require("path");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(scss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.(webp)$/i,
                use: ["url-loader"]
            }
        ]
    },
    entry: "./src/index.js",
    output: {
        filename: "ponyacha.js",
        path: path.resolve(__dirname, "dist"),
        library: "poNYACHA"
    }
};
