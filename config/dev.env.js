'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ENDPOINT: '"https://cheater-api.herokuapp.com"'
  API_ENDPOINT: '"http://13.114.221.235/api"'
})
