var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('build-css', function(){
	gulp.src('assets/stylesheets/styles.styl')
		.pipe(stylus({cache: false}))
		.pipe(gulp.dest('public/'));
});

gulp.task('build-html', function(){
	gulp.src('assets/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('public/'));
});

gulp.task('build-js', function(){
	gulp.src('assets/javascript/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('public/'));
});

gulp.task('watch', function(){
	gulp.watch(['assets/stylesheets/**/*.styl'], ['build-css']);
	gulp.watch(['assets/javascript/**/*.js'], ['build-js']);
	gulp.watch(['assets/**/*.jade'], ['build-html']);
});

gulp.task('start-server', function() {
  nodemon({
    verbose: false,
    script: 'index.js',
    watch: ['assets', 'index.js'],
    ext: 'js',
    env: {
      NODE_ENV: 'development'
    }
  })
});

gulp.task('default', ['build-html', 'build-js', 'build-css', 'start-server', 'watch']);