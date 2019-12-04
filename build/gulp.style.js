
const config = require('./config')
const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCss = require('gulp-clean-css')
const autoPrefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const banner = require('gulp-banner')

gulp.task('banner', function() {
  if (config.production) {
    return gulp.src(config.distPath + config.stylePath + '/' + config.styleFileName)
    .pipe(banner(config.banner))
    .pipe(gulp.dest(config.distPath + config.stylePath))
  } else {
    return gulp.src(config.distPath + config.stylePath + '/' + config.styleFileName)
    .pipe(banner(config.banner))
    .pipe(gulp.dest(config.distPath + config.stylePath))
  }
});

gulp.task('clean', () => {
  if (config.production) {
    return gulp.src(config.distPath + config.stylePath + '/' + config.styleFileName)
    .pipe(clean({ force: true }))
  } else {
    return gulp.src(config.distPath + config.stylePath + '/' + config.styleFileName)
    .pipe(clean({ force: true }))
  }
})

gulp.task('font', () => {
  return gulp.src(config.commonPath + config.stylePath + '/fonts/*.*')
  .pipe(gulp.dest(config.distPath + config.stylePath + '/fonts'))
})

gulp.task('image', () => {
  return gulp.src(config.commonPath + config.stylePath + '/images/*.*')
  .pipe(gulp.dest(config.distPath + config.stylePath + '/images'))
})

gulp.task('scss', () => {
  if (config.production) {
    return gulp.src(config.commonPath + config.stylePath + '/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat(config.styleFileName))
    .pipe(autoPrefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest(config.distPath + config.stylePath))
  } else {
    return gulp.src(config.commonPath + config.stylePath + '/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(concat(config.styleFileName))
    .pipe(autoPrefixer())
    .pipe(gulp.dest(config.distPath + config.stylePath))
  }
})

gulp.task('watch', () => {
  gulp.watch(config.commonPath + config.stylePath + '/fonts/*.*', gulp.series('font'))
  gulp.watch(config.commonPath + config.stylePath + '/images/*.*', gulp.series('image'))
  gulp.watch(config.commonPath + config.stylePath + '/*.scss', gulp.series('scss', 'banner'))
})

if (config.production) {
  gulp.task('default', gulp.series('scss', 'banner', gulp.parallel('font', 'image')))
} else {
  gulp.task('default', gulp.series('scss', 'banner', gulp.parallel('font', 'image', 'watch')))
}
