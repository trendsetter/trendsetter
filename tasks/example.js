var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('build-css', function(){
	gulp.src('example/assets/stylesheets/styles.styl')
		.pipe(stylus({
			cache: false,
			compress: false
		}))
		.pipe(gulp.dest('example/public/'));
});

gulp.task('build-html', function(){
	gulp.src('example/assets/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('example/public/'));
});

gulp.task('build-js', function(){
	gulp.src('example/assets/javascript/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('example/public/'));
});

gulp.task('watch', function(){
	gulp.watch(['example/assets/stylesheets/**/*.styl'], ['build-css']);
	gulp.watch(['example/assets/javascript/**/*.js'], ['build-js']);
	gulp.watch(['example/assets/**/*.jade'], ['build-html']);
});

gulp.task('start-server', function() {
  nodemon({
    verbose: false,
    script: 'example/index.js',
    watch: ['example/assets', 'example/index.js'],
    ext: 'js',
    env: {
      NODE_ENV: 'development'
    }
  })
});

gulp.task('example', ['build-html', 'build-js', 'build-css', 'start-server', 'watch']);