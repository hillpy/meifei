import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import cssOnly from 'rollup-plugin-css-only'
import cleanCss from 'clean-css'
import { writeFileSync } from 'fs'
import { terser } from 'rollup-plugin-terser'
import pkg from '../package.json'

const production = !process.env.ROLLUP_WATCH
const version = process.env.VERSION || pkg.version
const libName = pkg.name
const birthYear = 2019
const banner =
    '/*\n' +
    ` * ${libName} v${version}\n` +
    ` * (c) ${birthYear}-${new Date().getFullYear()} ${pkg.author}\n` +
    ` * Released under the ${pkg.license} License.\n` +
    ' */'
const outPath = './dist/'
const outFileInfo = {
  'dev': {
    'cjs': pkg.main,
    'esm': pkg.module,
    'umd': pkg.browser
  },
  'prod': {
    'cjs': outPath + libName.toLowerCase() + '.cjs.min.js',
    'esm': outPath + libName.toLowerCase() + '.esm.min.js',
    'umd': outPath + libName.toLowerCase() + '.min.js'
  }
}
const outPutCss = {
  'dev': outPath + libName.toLowerCase() + '.css',
  'prod': outPath + libName.toLowerCase() + '.min.css'
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: production ? outFileInfo.prod.cjs : outFileInfo.dev.cjs,
      format: 'cjs',
      banner: banner,
      name: libName,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: production ? outFileInfo.prod.esm : outFileInfo.dev.esm,
      format: 'es',
      banner: banner,
      name: libName,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: production ? outFileInfo.prod.umd : outFileInfo.dev.umd,
      format: 'umd',
      banner: banner,
      name: libName,
      globals: {
        vue: 'Vue'
      }
    }
  ],
  plugins: [
    vue({
      css: false
    }),
    resolve(),
    babel({
      exclude: ['node_modules/**']
    }),
    commonjs(),
    cssOnly({
      output(style) {
        production
        ?
        writeFileSync(
          outPutCss.prod,
          new cleanCss().minify(style).styles
        )
        :
        writeFileSync(
          outPutCss.dev,
          style
        )
      }
    }),
    production && terser()
  ],
  external: [
    'vue'
  ]
}
