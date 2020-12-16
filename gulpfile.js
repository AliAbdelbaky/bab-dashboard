//Export Plugins
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    // Autoprefixer Plugin
    prefix = require('gulp-autoprefixer'),
    // Sass Plugin
    sass = require('gulp-sass'),
    // PugJs Plugin
    pug = require('gulp-pug'),
    // live Reload Plugin
    livereload = require('gulp-livereload'),
    // Sourcemaps Plugin
    sourcemaps = require('gulp-sourcemaps'),
    //uglify Plugin
    uglify = require('gulp-uglify'),
    //Minify Plugin
    minify = require('gulp-minify'),
    //Notify Plugin
    notify = require('gulp-notify'),
    //Compress Plugin
    compress = require('gulp-zip');
// Html Task
gulp.task('html', function() {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(notify('Your Html is Ready'))
        .pipe(livereload())

});
//Css Task
gulp.task('css', function() {
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.sass'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError)
        .pipe(prefix())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('Your CSS is Ready'))
        .pipe(livereload())

});
//JS Task
gulp.task('js', function() {
    return gulp.src('stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('Your JS is Ready'))
        .pipe(livereload())

});

//Compress Task
gulp.task('compress', function() {
    return gulp.src('./dist/**/*.*')
        .pipe(compress('Dashboard.zip'))
        .pipe(gulp.dest('./dist/compressed'))
        .pipe(notify('The Project has been Compressed'))

});
// assets Task
gulp.task('assets', function() {
    return gulp.src('stage/assets/*.*')
        .pipe(gulp.dest('dist/img'))
        .pipe(notify('Your Images Is Ready'))

});
// Watch Task
gulp.task('watch', function() {
    require('./server');
    livereload.listen();
    gulp.watch('stage/html/**/*.pug', gulp.series('html'));
    gulp.watch(['stage/css/**/*.css', 'stage/css/**/*.sass'], gulp.series('css'));
    gulp.watch('stage/js/*.js', gulp.series('js'));
    gulp.watch('stage/assets/*.*', gulp.series('assets'));
})