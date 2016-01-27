var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');
var open = require('gulp-open')

gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./Content/less/*.less", ['less']);
    gulp.watch("./Views/*.html").on('change', browserSync.reload);
    gulp.watch("./Content/js/*.js").on('change', browserSync.reload);
});


gulp.task('less', function () {
  return gulp.src('./Content/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('./Content/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'open'])