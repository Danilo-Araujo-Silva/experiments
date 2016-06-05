var gulp = require('gulp');
var watch = require('gulp-watch');
var dirSync = require('gulp-dir-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var shell = require('gulp-shell');


gulp.task('default', function() {

});

gulp.task('sync', function() {
	dirSync('../www/view/audio', '../website/audio', {});
	dirSync('../www/view/css', '../website/css', {filter: '^(.*[.]css)$'});
	dirSync('../www/view/font', '../website/font', {});
	dirSync('../www/view/image', '../website/image', {});
	dirSync('../www/other/compressed/js', '../website/js', {});
	dirSync('../www/view/video', '../website/video', {});
	dirSync('../website', '../cordova/www', {});
});

gulp.task('watch', function () {
	gulp.watch(
		['../www/controller/js/**/*.js', '../www/model/js/**/*.js'],
		['uglify']
	);
});

gulp.task('uglify', shell.task('node ../www/vendor/requirejs/requirejs/2.2.0/r.js -o build.js'));

//gulp.task('uglify', function () {
//	var b = browserify({
//		entries: [
//          '../www/controller/js/index.js',
//        ],
//		debug: true
//	});
//
//	return b.bundle()
//	.pipe(source('all.js'))
//	.pipe(buffer())
//	.pipe(sourcemaps.init({loadMaps: true, identityMap: true}))
//	.pipe(uglify({outSourceMap: "all.js.map"}))
//	.on('error', util.log)
//	.pipe(sourcemaps.write('./'))
//	.pipe(gulp.dest('../www/other/compressed/js/'));
//});