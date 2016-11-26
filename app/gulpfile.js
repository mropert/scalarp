var gulp = require('gulp'),
    bsConfig = require('gulp-bootstrap-configurator'),
    del = require('del'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    eslint = require('gulp-eslint');

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

// Lint
gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['src/js/**/*.jsx','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

// React
gulp.task('react', function() {
    return browserify('src/js/main.jsx')
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

// Rerun the task when a file changes
gulp.task('watch', ['lint'], function() {
  gulp.watch(['src/js/**/*.jsx'], ['react']);
  gulp.watch(['src/images/**/*'], ['images']);
});

// Main task
gulp.task('default', ['clean', 'lint'], function() {
  gulp.start('bootstrap-css', 'chrome-assets', 'images', 'react', 'watch');
});
