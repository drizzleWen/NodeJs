var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-clean-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var livereload = require('gulp-livereload');
// Get one .styl file and render 
gulp.task('stylus', function() {
    return gulp.src('./public/stylus/*.styl')
        .pipe(stylus())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', function() {
    gulp.watch('./public/stylus/*', ['stylus']);
});
// Default gulp task to run 
gulp.task('default', ['watch']);