var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile:sass', function() {
    return gulp.src('./assets/sass/**/*.scss')
            .pipe(sass({
                'sourceComments': 'map'
            }))
            .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.scss', ['compile:sass'])
});

gulp.task('default', ['compile:sass', 'watch']);