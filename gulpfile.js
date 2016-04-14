var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');
var babel = require('gulp-babel');
//var concat = require('gulp-concat');
//var jshint = require('gulp-jshint');
var del = require('del');
var _ = require('lodash');
var transform = require('vinyl-transform');
var react = require('gulp-react');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');


var bundlejs = 'bundle.js';
var buildNeeded = [
  {'entries': './client/admin/newIndex.jsx', 'outputPath': './public/js/admin/', 'outputFile': 'bundle.js'},
  {'entries': './client/vege/index.jsx', 'outputPath': './public/js/vege/', 'outputFile': 'bundle.js'}
];

gulp.task('browserify', function () {
  return browserify({entries: './client/home/index.jsx', extensions: ['.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
  //gulp.src(['./client/**/*.js', './client/**/*.jsx'])
  //  .pipe(babel({ presets: ['es2015', 'react'] }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js'))
});


gulp.task('babel', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js', './views/**/*.jsx'], ['babel', 'browserify']);
});

gulp.task('server', function () {
  nodemon({
    script: 'app.js'
    , ext: 'jsx'
    , env: { 'NODE_ENV': 'development' }
    , tasks: ['babel', 'browserify']
  })
    .on('restart', function() {
      console.log('... restarted ...');
    })
});

//gulp.task('copy-files', function() {
//  return gulp.src('./src/**/*.json', {base: './src/'})
//    .pipe(gulp.dest('./'));
//});


// I added this so that you see how to run two watch tasks
//gulp.task('css', function () {
//  gulp.watch('public/css/**/*.css', function () {
//    return gulp.src('public/css/**/*.css')
//      //.pipe(concat('main.css'))
//      .pipe(gulp.dest('build/'));
//  });
//});

gulp.task('clean:dist', function() {
  console.log('... running clean:dist ...');
  return del.sync('./dist');
});




//gulp.task('build', function () {
//  _.forEach(buildNeeded, function(v) {
//    return browserify({entries: v.entries, extensions: ['.jsx'], debug: true})
//      .transform(reactify)
//      .bundle()
//      .pipe(source(bundlejs))
//      .pipe(gulp.dest(v.output));
//  });
//});
//gulp.task('build', function () {
//  return browserify({
//      entries: './client/admin/newIndex.jsx',
//      extensions: ['.jsx'],
//      debug: true})
//    .transform("babelify", {presets: ["es2015", "react"]})
//    .bundle()
//    .pipe(source('bundle.js'))
//    .pipe(gulp.dest('./public/js/admin/'));
//});
//gulp.task('watch', ['build'], function () {
//  gulp.watch('*.jsx', ['build']);
//});




// Concatenate & Minify JS
//gulp.task('scripts', ['clean:dist'], function() {
//  return gulp.src('js/*.js')
//    .pipe(concat('all.js'))
//    .pipe(gulp.dest('dist'))
//    .pipe(rename('all.min.js'))
//    .pipe(uglify())
//    .pipe(gulp.dest('dist'));
//});

// configure the jshint task
//gulp.task('jshint', function() {
//  return gulp.src('source/javascript/**/*.js')
//    .pipe(jshint())
//    .pipe(jshint.reporter('jshint-stylish'));
//});




//gulp.task('default', ['browserify-Admin', 'browserify-Vege', 'watch']);
gulp.task('build', ["clean:dist", 'babel', 'browserify']);
gulp.task('default', ["server", "watch"]);
