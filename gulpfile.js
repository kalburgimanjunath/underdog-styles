// Load in our dependencies
var async = require('async');
var gulp = require('gulp');
var gulpConsolidate = require('gulp-consolidate');
var gulpIconfont = require('gulp-iconfont');
var gulpNotify = require('gulp-notify');

gulp.task('build-icons', function buildIcons (done) {
  // Generate stream to create font files from SVG icons
  var iconStream = gulp.src(['icons/*.svg']);
  iconStream = iconStream.pipe(gulpIconfont({
    autoHint: true, // Use TTFAutoHint apply FreeType autohinting system to fonts
    fontName: 'underdogio-icons',
    formats: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
    normalize: true // Ensure icons are consistent size
  }));
  iconStream.on('error', gulpNotify.onError('Iconfont error: <%= error.message %>'));

  // Use async.parallel to ensure we call `done` after both fonts and SASS template are written successfully
  async.parallel([
    function writeGlyphs (cb) {
      // Generate `public/css/objects/_icons-auto.scss` from template `public/icons/_icons-auto.scss`
      iconStream.on('glyphs', function handleOnGlyphs (glyphs, options) {
        var templateStream = gulp.src('icons/_icons-auto.scss');
        templateStream.on('error', gulpNotify.onError('Icon CSS error: <%= error.message %>'));
        templateStream.pipe(gulpConsolidate('underscore', {glyphs: glyphs}, {useContents: true}));
        templateStream.pipe(gulp.dest('scss/objects/'))
          .on('finish', cb);
      });
    },
    function outputFonts (cb) {
      // Place generated fonts in `public/fonts/`
      iconStream.pipe(gulp.dest('fonts/'))
        .on('finish', cb);
    }
  ], done);
});
