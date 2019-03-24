import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
// import copy from 'rollup-plugin-copy-assets';
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const extensions = [
  '.js'
]

const name = 'PDFExportComponents'

export default {
  input: './src/index.js',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['antd', 'lodash', 'uuid'],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      include: ['src/*'],
      // include: ['src/**/*'],
      exclude: [
        'node_modules/**',
        '/src/data/__tests__'
      ]
      // exclude: 'node_modules/**'
      // presets: presets,
      // plugins: plugins
    })

    // just fix in order to move json files to npm
    // copy({
    //   assets: [
    //     './src/data'
    //   ],
    // }),
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
