var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('example/css', function(){
	gulp.src('example/assets/stylesheets/styles.styl')
		.pipe(stylus({
			cache: false,
			compress: false
		}))
		.pipe(gulp.dest('example/public/'));
});

gulp.task('example/html', function(){
	gulp.src('example/assets/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('example/public/'));
});

gulp.task('example/js', function(){
	gulp.src('example/assets/javascript/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('example/public/'));
});

gulp.task('example/watch', function(){
	gulp.watch(['example/assets/stylesheets/**/*.styl'], ['example/css']);
	gulp.watch(['example/assets/javascript/**/*.js'], ['example/js']);
	gulp.watch(['example/assets/**/*.jade'], ['example/html']);
});

gulp.task('example/server', function() {
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

gulp.task('example/build', ['example/html', 'example/js', 'example/css']);
gulp.task('example', ['example/build', 'example/server', 'example/watch']);