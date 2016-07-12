var gulp = require('gulp');
var zip = require('gulp-zip');
var clean = require('gulp-clean');
var fs = require('fs');
var path = require('path');

gulp.task('clean', function () {
    return gulp.src(['website/*.zip', 'dist/*.zip'], { read: false })
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    fs.readdir(__dirname + '/website/', function (err, files) {
      if(err) {
        console.error(err); return;
      } else {
        files.forEach(function (file) {
          console.log( '正在对' + file + '项目进行zip压缩' );

          gulp.src( path.resolve(__dirname, 'website/' + file + '/**/*') )
              .pipe(zip(file+'.zip'))
              .pipe(gulp.dest('dist/'));

          console.log( file + '压缩完毕' )
        });
      }
    });
});
