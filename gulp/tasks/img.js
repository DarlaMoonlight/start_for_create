module.exports = function() {
$.gulp.task('img:dev', function () {
	return $.gulp.src('src/static/img/*.{png,PNG,jpg,JPG,JPEG,jpeg,gif,GIF}')
	.pipe($.gulp.dest('build/static/img'));
});
$.gulp.task('img:build', function () {
	return $.gulp.src('src/static/img/*.{png,PNG,jpg,JPG,JPEG,jpeg,gif,GIF}')
	.pipe($.gp.tinypng('dMWfe5dHlzEbyYSHbbT0gBaN5iqSgmUV'))
	.pipe($.gulp.dest('build/static/img'));
})
};
