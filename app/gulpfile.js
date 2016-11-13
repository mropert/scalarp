var gulp = require('gulp'),
    del = require('del');

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

// Manifest
gulp.task('manifest', function() {
  return gulp.src('src/assets/manifest.json')
    .pipe(gulp.dest('dist'));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
});

// Window
gulp.task('window', function() {
  return gulp.src('src/assets/window.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function() {
  gulp.start('images', 'manifest', 'scripts', 'window');
});