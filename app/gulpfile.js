var gulp = require('gulp'),
    bsConfig = require('gulp-bootstrap-configurator'),
    del = require('del'),
    babelify = require('babelify'),
    browserify = require('browserify')
    source = require('vinyl-source-stream');

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Chrome assets
gulp.task('chrome-assets', function() {
  return gulp.src('src/assets/*')
    .pipe(gulp.dest('dist'));
});

// For CSS 
gulp.task('bootstrap-css', function(){
  return gulp.src("src/bootstrap-config.json")
    .pipe(bsConfig.css({
      compress: true,
      bower: false,
      name: '../bootstrap.css' // bootstrap-configurator has a creative way to determine target path...
    }))
    .pipe(gulp.dest("dist/styles"));
});
 
// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

// React
gulp.task('react', function() {
    return browserify('src/js/main.jsx')
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

// Main task
gulp.task('default', ['clean'], function() {
  gulp.start('bootstrap-css', 'chrome-assets', 'images', 'react');
});