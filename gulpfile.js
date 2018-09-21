const gulp = require('gulp');
const removeEmptyLines = require('gulp-remove-empty-lines');
const htmlbeautify = require('gulp-html-beautify');
const browserSync = require('browser-sync').create();
 
gulp.task('tojson', function () {
  gulp.src('./raw/*.html')
  .pipe(removeEmptyLines())
  .pipe(gulp.dest('./'));
});
 
gulp.task('htmlClean', function () {
  gulp.src('./raw/*.html')
  .pipe(removeEmptyLines({
    removeComments: false
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('htmlbeautify', function() {
  var options = {
    indentSize: 4
  };
  gulp.src('./raw/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./'))
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});