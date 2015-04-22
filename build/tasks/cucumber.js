var gulp = require('gulp');
var paths = require('../paths');
var to5 = require('gulp-babel');
var plumber = require('gulp-plumber');
var webdriver_update = require('gulp-protractor').webdriver_update;
var cucumber = require('gulp-cucumber');

// for full documentation of gulp-protractor,
// please check https://github.com/mllrsohn/gulp-protractor
gulp.task('webdriver_update', webdriver_update);

// transpiles files in
// /features/step-definitions/src/ from es6 to es5
// then copies them to features/step-definitions/dist/
gulp.task('build-cucumber-support', function () {
  return gulp.src(paths.cucumberSupportSrc)
    .pipe(plumber())
    .pipe(to5())
    .pipe(gulp.dest(paths.cucumberSupportDist));
});

gulp.task('build-cucumber-steps', function () {
  return gulp.src(paths.cucumberStepsSrc)
    .pipe(plumber())
    .pipe(to5())
    .pipe(gulp.dest(paths.cucumberStepsDist));
});

// runs build-cucumber-steps task
// then runs Cucumber features
// using Protractor: http://angular.github.io/protractor/
gulp.task('cucumber', ['webdriver_update', 'build-cucumber-support', 'build-cucumber-steps'], function(cb) {
  return gulp.src(paths.cucumberStepsDist + "/**/*.js")
    .pipe(cucumber({
      'steps': paths.cucumberStepsDist + '/**/*.js',
      'support': paths.cucumberSupportDist + '/**/*.js'
    }))
    .on('error', function(e) { throw e; });
});
