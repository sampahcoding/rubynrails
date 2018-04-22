'use strict';

const config = require('./gulp.config.js');

var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require( 'gulp-autoprefixer' );
var concat = require('gulp-concat');
var del = require('del');

gulp.task('sass', function () {
  return gulp.src('./gulp/stylesheets/**/*.sass')
    .pipe(sass({
      errLogToConsole: config.errLogToConsole,
      outputStyle: config.outputStyle,
      precision: config.precision
    })
    .on('error', sass.logError))
		.pipe( autoprefixer( config.BROWSERS_LIST ) )
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./app/javascript/src'));
});

gulp.task('clean:templates', function() {
  return del(['./app/javascript/src']);
});

gulp.task('watch', function () {
  gulp.watch('./gulp/stylesheets/**/*.sass', gulp.parallel('build'));
});


gulp.task('build', gulp.series(['clean:templates', 'sass']));
