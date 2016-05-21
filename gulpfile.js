const gulp = require('gulp')
	concat = require('gulp-concat')
	sass = require('gulp-sass')
	child = require('child_process')
	gutil = require('gulp-util')
	uglify = require('gulp-uglify')
	notify = require('gulp-notify')
	browserSync = require('browser-sync').create();

const config = {
	siteRoot: './_site',
	publicDir: './public',
	sassFilter:  './_css/**/*.?(s)css',
	jsFilter:  './_js/**/*.js'
}

gulp.task('css', () => {
	gulp.src(config.sassFilter)
		.pipe(sass({
			style: 'compressed'
			}).on("error", notify.onError(function (error) {
				return "Error: " + error.message;
			})))
		.pipe(concat('all.css'))
		.pipe(gulp.dest(config.publicDir))
});

gulp.task('js', () => {
	gulp.src(config.jsFilter)
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.publicDir))
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('bundle', [
  	'exec',
  	'jekyll',
    'build',
    '--watch',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('default', ['css', 'js', 'jekyll', 'serve']);

gulp.task('serve', () => {
  browserSync.init({
    files: [config.siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: config.siteRoot
    }
  });
  
  gulp.watch(config.sassFilter, ['css']);
  gulp.watch(config.jsFilter, ['js']);
});