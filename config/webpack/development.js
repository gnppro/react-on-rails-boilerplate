process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const ESLintPlugin = require('eslint-webpack-plugin');
const environment = require('./environment');

environment.plugins.prepend(
  'EslintWebpack',
  new ESLintPlugin({}),
);

module.exports = environment.toWebpackConfig();
