var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/script/main.coffee',
  output: {
    filename: './public/bundle.js'
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
  resolve: {
    extensions: ["", ".web.coffee", ".web.js", ".js"]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  devtool: 'cheap-module-eval-source-map'
};
