'use strict'

const path = require('path')
// { "modules": false }
const presets = [
  '@babel/preset-env',
  '@babel/preset-react'
]

const plugins = [
  [
    require.resolve('@babel/plugin-proposal-class-properties')
  ],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        '~': './src/components'
      }
    }
  ],
  [
    require.resolve('@babel/plugin-proposal-decorators'),
     { "legacy": true }
  ],
  [
    require.resolve('@babel/plugin-syntax-dynamic-import')
  ]
]

module.exports = { presets, plugins }
