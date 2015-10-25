var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var open = require('gulp-open');

gulp.task('dev', function() {
  nodemon({
    script: 'server.js'
  }).on('start', function() {
    console.log('[node-server] started: opening the app in your default browser...');
    //give sometime for the server to start
    setTimeout(function() {
      gulp.src('../dist/index.html')
      .pipe(open({
        uri: 'http://localhost:8000/'
      }));
    }, 500);
  });
});
