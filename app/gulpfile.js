/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const bsConfig = require('gulp-bootstrap-configurator');
const del = require('del');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

// Clean
gulp.task('clean', () => del(['dist']));

// Chrome assets
gulp.task('chrome-assets', () => gulp.src('src/assets/*')
  .pipe(gulp.dest('dist')));

// For CSS
gulp.task('bootstrap-css', () => gulp.src('src/bootstrap-config.json')
    .pipe(bsConfig.css({
      compress: true,
      bower: false,
      name: 'bootstrap.css',
    }))
    .pipe(gulp.dest('dist/styles')));

// Fonts
gulp.task('fonts', () => gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts')));

// Images
gulp.task('images', () => gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images')));

// Lint
gulp.task('lint', () =>
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
     gulp.src(['src/js/**/*.jsx', '!node_modules/**', 'src/test/*.jsx'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError()));

// React
gulp.task('react', () => browserify('src/js/main.jsx')
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js')));

// Tests
gulp.task('test', () =>
        gulp.src(['src/test/*.jsx'])
        .pipe(mocha({ compilers: 'js:babel-core/register' })));

// Build task
gulp.task('build', ['clean', 'lint', 'test'], () => {
  gulp.start('bootstrap-css', 'chrome-assets', 'fonts', 'images', 'react');
});

// Rerun the task when a file changes
gulp.task('watch', ['lint'], () => {
  gulp.watch(['src/js/**/*.jsx', 'src/test/*.jsx'], ['lint', 'test', 'react']);
  gulp.watch(['src/images/**/*'], ['images']);
});

// Main task
gulp.task('default', () => {
  gulp.start('build', 'watch');
});
