import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import copy from 'rollup-plugin-copy-assets';
// import replace from 'rollup-plugin-replace'
// import uglify from 'rollup-plugin-uglify'

import pkg from './package.json'

const extensions = [
  '.js', '.jsx'
]

const name = 'PDFExportComponents'

export default {
  input: './src/index.js',

  // All the used libs needs to be here
  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: [
    'antd',
    'lodash',
    'uuid',
    'react',
    'react-dom',
    '@react-pdf/renderer'
  ],

  globals: {
    react: 'React'
  //   'react-dom': 'ReactDOM'
  },

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      include: ['src/*'],
      // include: ['src/**/*'],
      exclude: [
        'node_modules/**'
      ]
    }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs({
      exclude: 'src/**'
    })

    // just fix in order to move json files to npm
    // copy({
    //   assets: [
    //     './src/data'
    //   ],
    // }),

    // replace()
  ],

  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es'
  }
  // {
  //   file: pkg.browser,
  //   format: 'iife',
  //   name,
  //
  //   // https://rollupjs.org/guide/en#output-globals-g-globals
  //   globals: {}
  // }
  ]
}

// if (env === 'production') {
// 	config.plugins.push(
// 		uglify({
// 			compress: {
// 				pure_getters: true,
// 				unsafe: true,
// 				unsafe_comps: true,
// 				warnings: false,
// 			},
// 		})
// 	)
// }
