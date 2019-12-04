import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
// import sourcemaps from 'rollup-plugin-sourcemaps'
// import cssOnly from 'rollup-plugin-css-only'
// import cleanCss from 'clean-css'
// import { writeFileSync } from 'fs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
// import cssnano from 'cssnano'
import { terser } from 'rollup-plugin-terser'
// import image from 'rollup-plugin-image'
import img from 'rollup-plugin-img'
// import alias from 'rollup-plugin-alias'
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
    ' */\n'
// 在banner基础上移除/ * 等符号，暂无用
// const postcssBannerStr = banner.replace(/(\/\*\n+)|(\*\/\n+)|([ ]\*[ ]+)|.(?=[^.]*$)(\n)/g, '')
const outPath = './dist/'
const stylePath = 'style/'
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
  'dev': outPath + stylePath + libName.toLowerCase() + '.scoped.css',
  'prod': outPath + stylePath + libName.toLowerCase() + '.scoped.min.css'
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
    resolve({
      extensions: ['.js', '.vue', '.json']
    }),
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true
    }),
    commonjs(),
    postcss({
      // sourceMap: true,
      minimize: production && true,
      plugins: [autoprefixer],
      extract: production ? outPutCss.prod : outPutCss.dev
    }),
    // 暂无用，已交由postcss处理样式
    // cssOnly({
    //   output (style) {
    //     production
    //     ?
    //     writeFileSync(
    //       outPutCss.prod,
    //       new cleanCss().minify(style).styles
    //     )
    //     :
    //     writeFileSync(
    //       outPutCss.dev,
    //       style
    //     )
    //   }
    // }),
    production && terser({
      output: {
        comments: function (node, comment) {
          let text = comment.value
          let type = comment.type
          if (type == "comment2") {
            // multiline comment

            return /Released under the|License/.test(text)
            
            // // 由于rollup-plugin-terser传入函数时，函数内无法使用当前外部参数，暂注释
            // let pattern = new RegExp(banner, 'g')
            // return pattern.test(text)
          }
        }
      }
    }),
    // image(),
    img()
  ],
  external: ['vue']
};
