/**
 * Created by mnagarat on 7/22/16.
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources=['components/coffee/tagline.coffee']
/*
gulp.task('log',function(){
    gutil.log('workflows are awesome');
});
*/

gulp.task('coffee',function(){
    gulp.src(coffeeSources)
        .pipe(coffee({bare:true}))
            .on('error',gutil.log)
        .pipe(gulp.dest('components/scripts'))
});