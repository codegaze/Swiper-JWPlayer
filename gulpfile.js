var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename');

var src = './src/',
    dest = './dest/';


gulp.task('lint', function() {
  return gulp.src(src + '*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));    
});

gulp.task('uglify', function () {  
  return gulp.src(src + '*.js')
    .pipe(gulp.dest(dest))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
    gulp.watch(src + '*.js', ['lint','uglify']);
});

gulp.task('default', ['lint', 'uglify', 'watch']);