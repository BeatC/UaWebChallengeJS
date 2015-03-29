var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('styles', function () {
	gulp.src('./app/src/styles/*.scss')
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./app/dist/css'));
});

gulp.task('views', function () {
	gulp.src('./app/src/views/*.html')
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('js', function () {
	gulp.src('./app/src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./app/dist/js'));
});

gulp.task('images', function () {
	gulp.src('./app/src/img/**/*.*')
		.pipe(gulp.dest('./app/dist/img'));
});

gulp.task('watch', function () {
	gulp.watch('./app/src/styles/*.scss', ['styles']);
	gulp.watch('./app/src/views/*.html', ['views']);
	gulp.watch('./app/src/js/*.js', ['js']);
	gulp.watch('./app/src/img/**/*.*', ['images']);
});

gulp.task('default', ['styles', 'views', 'js', 'images', 'watch']);