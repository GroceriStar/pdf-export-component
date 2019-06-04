'use strict'

// const path = require('path')
// { "modules": false }
const presets = [
  '@babel/preset-env',
  '@babel/preset-react'
]

//@TODO I add here everything, but i'm not sure if we need all of that plugins.
//I tried to fix rollup error
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
    { 'legacy': true }
  ],
  [
    require.resolve('@babel/plugin-syntax-dynamic-import')
  ],
  [
    require.resolve('@babel/plugin-transform-react-jsx')
  ],
  [
    require.resolve('@babel/plugin-transform-react-jsx-compat')
  ],
  [
    require.resolve('@babel/plugin-transform-react-jsx-self')
  ]
]

module.exports = { presets, plugins }
