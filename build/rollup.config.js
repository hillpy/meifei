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

const config = require('./config')

export default {
  input: 'src/index.js',
  output: [
    {
      file: config.production ? config.outputJSObj.prod.cjs : config.outputJSObj.dev.cjs,
      format: 'cjs',
      banner: config.banner,
      name: config.libName,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: config.production ? config.outputJSObj.prod.esm : config.outputJSObj.dev.esm,
      format: 'es',
      banner: config.banner,
      name: config.libName,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: config.production ? config.outputJSObj.prod.umd : config.outputJSObj.dev.umd,
      format: 'umd',
      banner: config.banner,
      name: config.libName,
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
      minimize: config.production,
      plugins: [autoprefixer],
      extract: config.production ? config.outputCSSObj.prod : config.outputCSSObj.dev
    }),
    // 暂无用，已交由postcss处理样式
    // cssOnly({
    //   output (style) {
    //     config.production
    //     ?
    //     writeFileSync(
    //       config.outputCSSObj.prod,
    //       new cleanCss().minify(style).styles
    //     )
    //     :
    //     writeFileSync(
    //       config.outputCSSObj.dev,
    //       style
    //     )
    //   }
    // }),
    config.production && terser({
      output: {
        comments: function (node, comment) {
          let text = comment.value
          let type = comment.type
          if (type == "comment2") {
            // multiline comment

            return /Released under the|License/.test(text)
            
            // // 由于rollup-plugin-terser传入函数时，函数内无法使用当前外部参数，暂注释
            // let pattern = new RegExp(config.banner, 'g')
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
