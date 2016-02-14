'use strict'

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    rename = require('gulp-rename'),
    md5 = require('gulp-md5-plus'),
    del = require('del');

var config = require('./webpack.config');

/**
 *  清理生产目录文件
 */
gulp.task('clean', function(cb) {
    del(['./static/*.js','./static/*.css','./static/*.map']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        cb();
    });
});

/**
 *  执行webpack打包
 */
gulp.task('webpack',['clean'], function(cb) {
    webpack(config, cb)
});

/**
 *  md5戳
 */
gulp.task('md5', function (done) {
    gulp.src('./static/*.js')
        .pipe(md5(0, '*.html'))
        .pipe(gulp.dest('static'))
        .on('end', done);
});

/**
 *  压缩css文件
 */
gulp.task('style',function() {
    gulp.src('./static/style.css')
    .pipe(minifycss())
    .pipe(gulp.dest('static'));
});

/**
 *  压缩js文件
 */
gulp.task('script',function(){
    gulp.src('./static/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('static'));
});

gulp.task('clean-build', ['webpack'], function() {
    console.log(process.env.NODE_ENV);
    gulp.start('style','script')
})

gulp.task('build', ['webpack'], function() {
    console.log(process.env.NODE_ENV);
    gulp.start('style','script','md5')
})
