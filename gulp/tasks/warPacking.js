var gulp   = require('gulp');
var war  = require('gulp-war');
var zip  = require('gulp-zip');
var config = require('../config.js').war;

gulp.task('war', ['build'], function () {
    gulp.src(config.src)
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('GeoRoad.war'))
        .pipe(gulp.dest("./dist"));
 
});