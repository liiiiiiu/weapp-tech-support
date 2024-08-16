const gulp = require('gulp')
const clean = require('gulp-clean')
const pump = require('pump')
const postcss = require('gulp-postcss')
const sorting = require('postcss-sorting')
const cssnano = require('cssnano')
const autoprefixer = require('gulp-autoprefixer')

const sourceDir = 'src'
const destDir = 'dist'

function cleanDest(cb) {
  pump([
    gulp.src(destDir, {
      allowEmpty: true
    }),
    clean()
  ], cb)
}

function copySource(cb) {
  pump([
    gulp.src([
      `${sourceDir}/components/*/*`
    ]),
    gulp.dest(destDir)
  ], cb)
}

function formatCss(cb) {
  pump([
    gulp.src([
      `${destDir}/*/*.wxss`
    ]),
    // 添加厂商前缀
    autoprefixer({
      overrideBrowserslist: ['> 0.15% in CN'],
      cascade: true
    }),
    postcss([
      // 样式属性自动排序
      sorting(),
      // 样式压缩
      cssnano()
    ]),
    gulp.dest(destDir)
  ], cb)
}

gulp.task('build', gulp.series(cleanDest, copySource, formatCss))