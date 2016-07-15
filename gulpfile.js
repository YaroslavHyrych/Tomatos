var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

var sassFiles = 'app/sass/**/*.sass';
var jadeFiles = 'app/jade/**/*.jade';
var scriptsFiles = 'app/scripts/*.js';
var dest = 'dist/';

gulp.task('sass', function() {
    gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('jade', function() {
    gulp.src(jadeFiles)
        .pipe(jade())
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(jadeFiles, ['jade']);
});

gulp.task('copy-css-libs', function() {
    gulp.src('app/libs/skeleton/css/skeleton.css')
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('copy-images', function() {
    gulp.src('app/images/*')
        .pipe(gulp.dest(dest + 'images'));
});

gulp.task('default', ['sass', 'jade']);