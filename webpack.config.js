const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src`;
const paths = {
  app: `${root}/app/app.module.js`,
  style: `${root}/styles`
};

// Loaders

// babel to convert ES6 to ES5
const scripts = {
  test: /\.js$/,
  exclude: /node_modules/,
  use : [
    {
      loader: 'babel-loader'
    }
  ]
};

// Minify Html
const html = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        minimize: true
      }
    }
  ]
};

// SASS convert into CSS
const styles = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract(
    {
      fallback: 'style-loader',
      use: [
        'css-loader', 
        'sass-loader'
      ]
    }  
  )
};

const extract = { 
  html: new HtmlWebPackPlugin(
    {
      template: './src/index.html',
      filename: './index.html'
    }
  ),
  styles: new ExtractTextPlugin(
    'css/styles.css'
  )
};

const config = {
  // change default entry to 'root.module.js' 
  entry: {
    bundle: paths.app
  },
  module: {
    rules : [
      scripts,
      html,
      styles
    ]
  },
  plugins: [
    extract.html,
    extract.styles
  ]
};

module.exports = config;