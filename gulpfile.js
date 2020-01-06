const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//complie SCSS into class
function style() {
  //1) Where is my scss file
  return (
    gulp
      .src("./scss/**/*.scss")
      //2) pass file through sass compiler
      .pipe(sass().on("error", sass.logError))
      //3) destination... Where to save it?
      .pipe(gulp.dest("./css"))
      //4) broswer sync to all browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style); //When anything changes inside of any scss file, run the style funtcion.
  gulp.watch("./*.html").on("change", browserSync.reload);
  // gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
