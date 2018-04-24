const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src`;
const paths = {
  app: `${root}/app/app.module.js`,
  style: `${root}/styles`,
  images: `${root}/images/**/*`
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

// SASS files convert into CSS files
const styles = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract(
    {
      fallback: 'style-loader',
      use: [ 
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    }  
  )
};

const copy = {
  images: new copyPlugin(
    [
      {
        from: paths.images,
        to: 'images/',
        flatten: true
      }
    ]
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
    {
      filename: '[name].css'
    }
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
    extract.styles,
    copy.images
  ]
};

module.exports = config;