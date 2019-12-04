/**
 * 公用常量
 */
const path = require('path')
const pkg = require(path.resolve(__dirname, '../package.json'))
const production = process.env.NODE_ENV === 'production' ? true : false
const version = process.env.VERSION || pkg.version
const libName = pkg.name
const birthYear = 2019
const banner =
    '/*\n' +
    ` * ${libName} v${version}\n` +
    ` * (c) ${birthYear}-${new Date().getFullYear()} ${pkg.author}\n` +
    ` * Released under the ${pkg.license} License.\n` +
    ' */\n'
const distPath = path.resolve(__dirname, '../dist')
const stylePath = '/style'

/**
 * for rollup
 */
// 在banner基础上移除/ * 等符号，暂无用
// const postcssBannerStr = banner.replace(/(\/\*\n+)|(\*\/\n+)|([ ]\*[ ]+)|.(?=[^.]*$)(\n)/g, '')
const outputJSObj = {
  'dev': {
    'cjs': pkg.main,
    'esm': pkg.module,
    'umd': pkg.browser
  },
  'prod': {
    'cjs': distPath + '/' + libName.toLowerCase() + '.cjs.min.js',
    'esm': distPath + '/' + libName.toLowerCase() + '.esm.min.js',
    'umd': distPath + '/' + libName.toLowerCase() + '.min.js'
  }
}
const outputCSSObj = {
  'dev': distPath + stylePath + '/' + libName.toLowerCase() + '.scoped.css',
  'prod': distPath + stylePath + '/' + libName.toLowerCase() + '.scoped.min.css'
}

/**
 * for gulp
 */
const commonPath = path.resolve(__dirname, '../src/common')
const styleFileName = production ? libName.toLowerCase() + '.min.css' : libName.toLowerCase() + '.css'

module.exports = {
  production,
  version,
  libName,
  birthYear,
  banner,
  distPath,
  stylePath,

  outputJSObj,
  outputCSSObj,

  commonPath,
  styleFileName
}