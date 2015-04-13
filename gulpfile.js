var gulp = require('gulp');

gulp.task('default', function() {
  gulp.watch(['*',], function(e){
    console.log("changed");
    console.log(e);
  } );
});