"use strict";

const path = require('path');

var prod = process.env.NODE_ENV === 'production';
module.exports = {
  wpyExt: '.vue',
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    sass: {
      'outputStyle': 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: ['@babel/preset-env'],
      plugins: ['@wepy/babel-plugin-import-regenerator', 'transform-node-env-inline']
    }
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
  }
};

if (prod) {
  // 压缩js
  module.exports.plugins = {
    'uglifyjs': {
      filter: /\.js$/,
      config: {}
    },
    'imagemin': {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        'jpg': {
          quality: 80
        },
        'png': {
          quality: 80
        }
      }
    }
  };
}