var fs = require('fs');
var glob = require('glob');
var async = require('async');
var slug = require('slug');
var markdown = require('meta-marked');

// Loads sections for the styleguide from
// the local filesystem.
module.exports = function(path, cb) {
  glob(path, function (er, files) {
    if(er) {
      return cb(er);
    }

    // Read each file that we got from glob
    async.map(files, fs.readFile, function(err, files){
      if (err) {
        return cb(err);
      }

      // Parse sections from each file
      var sections = files.map(function(buffer) {
          // Convert file content into markdown
          return markdown(buffer.toString());
        }).filter(function(doc) {
          // Filter out docs that don't have valid metadata
          return doc.meta && doc.meta.title;
        }).map(function(doc) {
          return {
            slug: slug(doc.meta.title).toLowerCase(), // Slug is used in TOC
            title: doc.meta.title,
            content: doc.html
          };
        });

        // Invoke callback with parsed sections.
        cb(null, sections);
    });
  });
};
