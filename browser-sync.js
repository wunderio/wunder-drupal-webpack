'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs');
const browserSync = require('browser-sync').create('App Server');
const path = require('path');

const rootDirectory = fs.realpathSync(process.cwd());
const packageJson = path.resolve(rootDirectory, 'package.json');
const paths = require(packageJson).paths;

// Load proxy config
const proxy = require(packageJson).proxy;

// Launch Browsersync server.
browserSync.init({
  proxy,
  files: [
    path.resolve(rootDirectory, paths.appThemeRoot, 'dist/**/*.css'),
    path.resolve(rootDirectory, paths.appThemeRoot, 'dist/**/*.js')
  ]
});

['SIGINT', 'SIGTERM'].forEach(function(sig) {
  process.on(sig, function() {
    browserSync.exit();
    process.exit();
  });
});
