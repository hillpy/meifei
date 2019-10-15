const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCss = require('gulp-clean-css')
const autoPrefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const banner = require('gulp-banner')
const pkg = require('../package.json')

const production = process.env.NODE_ENV === 'production' ? true : false
const styleFileName = production ? 'meifei.min.css' : 'meifei.css'
const version = process.env.VERSION || pkg.version
const libName = pkg.name
const birthYear = 2019
const comment =
    '/*\n' +
    ` * ${libName} v${version}\n` +
    ` * (c) ${birthYear}-${new Date().getFullYear()} ${pkg.author}\n` +
    ` * Released under the ${pkg.license} License.\n` +
    ' */\n'
const outPath = '../dist'
const inPath = '../src/common'
const stylePath = '/style'

gulp.task('banner', function() {
  if (production) {
    return gulp.src(outPath + stylePath + '/meifei.min.css')
    .pipe(banner(comment))
    .pipe(gulp.dest(outPath + stylePath))
  } else {
    return gulp.src(outPath + stylePath + '/meifei.css')
    .pipe(banner(comment))
    .pipe(gulp.dest(outPath + stylePath))
  }
});

gulp.task('clean', () => {
  if (production) {
    return gulp.src(outPath + stylePath + '/meifei.min.css')
    .pipe(clean({ force: true }))
  } else {
    return gulp.src(outPath + stylePath + '/meifei.css')
    .pipe(clean({ force: true }))
  }
})

gulp.task('font', () => {
  return gulp.src(inPath + stylePath + '/fonts/*.*')
  .pipe(gulp.dest(outPath + stylePath + '/fonts'))
})

gulp.task('image', () => {
  return gulp.src(inPath + stylePath + '/images/*.*')
  .pipe(gulp.dest(outPath + stylePath + '/images'))
})

gulp.task('scss', () => {
  if (production) {
    return gulp.src(inPath + stylePath + '/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat(styleFileName))
    .pipe(autoPrefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest(outPath + stylePath))
  } else {
    return gulp.src(inPath + stylePath + '/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(concat(styleFileName))
    .pipe(autoPrefixer())
    .pipe(gulp.dest(outPath + stylePath))
  }
})

gulp.task('watch', () => {
  gulp.watch(inPath + stylePath + '/fonts/*.*', gulp.series('font'))
  gulp.watch(inPath + stylePath + '/images/*.*', gulp.series('image'))
  gulp.watch(inPath + stylePath + '/*.scss', gulp.series('scss', 'banner'))
})

if (production) {
  gulp.task('default', gulp.series('scss', 'banner', gulp.parallel('font', 'image')))
} else {
  gulp.task('default', gulp.series('scss', 'banner', gulp.parallel('font', 'image', 'watch')))
}
