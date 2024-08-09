let gulp = require('gulp'),
  clean = require('gulp-clean'),
  changed = require('gulp-changed'),
  pump = require('pump')

const sourceWeappDir = 'src'
const distWeappDir = 'dist'

// 清理目标文件目录
const cleanWeappTask = function cleanWeappTask(cb) {
  pump([
    gulp.src(distWeappDir, {
      allowEmpty: true
    }),
    clean()
  ], cb)
}

// 拷贝源文件目录
const copyWeappTask = function copyTask(cb) {
  pump([
    gulp.src([
      sourceWeappDir + '/components/TechSupport/*.js',
      sourceWeappDir + '/components/TechSupport/*.json',
      sourceWeappDir + '/components/TechSupport/*.wxml',
      sourceWeappDir + '/components/TechSupport/*.wxss',
    ]),
    changed(distWeappDir + '/TechSupport'),
    gulp.dest(distWeappDir + '/TechSupport')
  ], cb)
}

// 监听源文件目录变化
const watchWeappTask = function watchWeappTask(cb) {
  gulp.watch(
    [
      sourceWeappDir + '/components/TechSupport/*.js',
      sourceWeappDir + '/components/TechSupport/*.json',
      sourceWeappDir + '/components/TechSupport/*.wxml',
      sourceWeappDir + '/components/TechSupport/*.wxss'
    ],
    gulp.series(cleanWeappTask, copyWeappTask
  ))
}

// 执行gulp
gulp.task('default', gulp.series(cleanWeappTask, copyWeappTask, watchWeappTask))