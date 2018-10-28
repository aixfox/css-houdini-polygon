const gulp = require('gulp');
const babel = require('gulp-babel');


const paths = {
  statics: {
    src: ['src/**/*.html', 'src/**/*.css'],
    dest: 'lib/',
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'lib/',
  }
};


function statics() {
  return gulp.src(paths.statics.src)
    .pipe(gulp.dest(paths.statics.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.statics.src, statics);
}


gulp.task('statics', statics);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

const build = gulp.parallel(statics, scripts);

gulp.task('build', build);

gulp.task('default', build);
