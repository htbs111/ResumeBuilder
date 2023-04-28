const gulp = require('gulp');
const shell = require('gulp-shell');

function build() {
  return gulp.src('*.tex')
    .pipe(shell([
      'pdflatex resume_faangpath.tex'
    ]));
}

function watch() {
  gulp.watch('*.tex', build);
}

exports.default = watch;