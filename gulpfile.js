/// <binding ProjectOpened='watch' />


// https://babeljs.io/docs/en/usage

const gulp = require('gulp');
const rename = require('gulp-rename');

// SCSS
const print = require('gulp-print').default;
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const minifyJs = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');


// JAVASCRIPT
const babel = require('gulp-babel');

// PATHS
const stylesFile = "development/scss/site.scss";
const stylesOut = "wwwroot/css";
const jsOut = "wwwroot/js";
const stylesIn = "development/scss/*.scss";
const scriptIn = 'development/js/*.js';


gulp.task('sass', function () {
  return gulp.src(stylesFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(stylesOut))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(stylesOut));
});


gulp.task('scripts', () => {
  return gulp
    .src(scriptIn)                        // #1. select all js files in the app folder
    .pipe(print())                        // #2. print each file in the stream
    .pipe(babel())                        // #3. transpile ES2015 to ES5 using ES2015 preset
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(jsOut))              // #4. copy the results to the build folder
    // NOW let's make the min version
    .pipe(minifyJs({ ext: { min: '.min.js' } }))
    .pipe(gulp.dest(jsOut));
});


// Watch sass
gulp.task('watchSass', function () {

  return gulp
    // watch the input for change and run our tasks when something happens
    .watch(stylesIn, ['sass'])
    // when there is a change, log a message in the console
    .on('change', function (event) { console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
});
// Watch sass
gulp.task('watchScript', function () {

  return gulp
    // watch the input for change and run our tasks when something happens
    //.watch(stylesIn, ['sass'])
    .watch(scriptIn, ['scripts'])
    // when there is a change, log a message in the console
    .on('change', function (event) { console.log('File ' + event.path + ' was ' + event.type + ', running tasks...'); });
});

gulp.task('watch', ['watchSass', 'watchScript']);

// Default task

gulp.task('default', ['watch']);