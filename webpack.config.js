const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



const commonConfig = {
  
  resolve: {
    alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
        // Not necessary unless you consume a module using `createClass`
        'create-react-class': 'preact-compat/lib/create-react-class',
        // Not necessary unless you consume a module requiring `react-dom-factories`
        'react-dom-factories': 'preact-compat/lib/react-dom-factories'
    }
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
	   {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};



const prodConfig = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

};

const devConfig = {};

module.exports = (env, opts) => {
  console.log(opts);

  if(opts.mode == "production"){
    return Object.assign(commonConfig,prodConfig);
  }
  
  if(opts.mode == "development"){
    return Object.assign(commonConfig,devConfig);
  }

  return commonConfig;


};