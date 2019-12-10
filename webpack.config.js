var path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/components/app/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist/js")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  }
}