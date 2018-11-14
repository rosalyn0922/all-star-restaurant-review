const gulp = require("gulp")
const inlinesource = require("gulp-inline-source")
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')

gulp.task("main-html", function() {
 return gulp.src("./src/index.html")
 .pipe(inlinesource())
 .pipe(gulp.dest("./public"))
})

gulp.task("info-html", function() {
  return gulp.src("./src/restaurant.html")
  .pipe(inlinesource())
  .pipe(gulp.dest("./public"))
 })

gulp.task('main-js', function(){
  return gulp.src('./src/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
})

gulp.task('restaurant-js', function(){
  return gulp.src('./src/js/restaurant_info.js')
    .pipe(sourcemaps.init())
    .pipe(concat('info.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
})

gulp.task('compileAll', ['main-html', 'info-html', 'main-js', 'restaurant-js'])