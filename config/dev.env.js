'use strict'
require('dotenv').config()
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENT_ID: JSON.stringify(process.env.CLIENT_ID)
})
