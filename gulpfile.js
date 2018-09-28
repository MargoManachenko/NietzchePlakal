const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true
    })
});

gulp.task('css', function () {
    gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('src'))
        .pipe(connect.reload())
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('src/styles/*.scss', ['css'])
    gulp.watch('src/*.html', ['html'])
});

gulp.task('default', ['connect','html' , 'css','watch']);