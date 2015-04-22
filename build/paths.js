var path = require('path');

var appRoot = 'src/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/',
  doc:'./doc',
  cucumberStepsSrc: 'features/step-definitions/src/**/*.js',
  cucumberStepsDist: 'features/step-definitions/dist/',
  cucumberSupportSrc: 'features/support/src/**/*.js',
  cucumberSupportDist: 'features/support/dist/',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
