// Load in our dependencies
var gemini = require('gemini');

// Define our URLs to evaluate
var staticUrls = [
  // Fetch the UI kit
  '/'
];

// Provide a helper to bind new fluent methods
function addCustomFunctions(suite) {
  suite.captureExtraLarge = function (fn) {
    return suite.capture('1920-onload', function setSize1920 (actions, find) {
      actions.setWindowSize(1920, 1080);
      if (fn) {
        fn(actions, find);
      }
    });
  };
  suite.captureLarge = function (fn) {
    return suite.capture('1400-onload', function setSize1024 (actions, find) {
      actions.setWindowSize(1400, 788);
      if (fn) {
        fn(actions, find);
      }
    });
  };
  suite.captureMedium = function (fn) {
    return suite.capture('768-onload', function setSize640 (actions, find) {
      actions.setWindowSize(768, 432);
      if (fn) {
        fn(actions, find);
      }
    });
  };
  suite.captureSmall = function (fn) {
    return suite.capture('530-onload', function setSize320 (actions, find) {
      actions.setWindowSize(530, 398);
      if (fn) {
        fn(actions, find);
      }
    });
  };
  suite.captureMultipleSizes = function (fn) {
    return suite.captureExtraLarge(fn).captureLarge(fn).captureMedium(fn).captureSmall(fn);
  };
  return suite;
}

// Define our tests
// For each of these pages, open it, navigate to it, and screenshot it
staticUrls.forEach(function captureUrl (url) {
  gemini.suite('underdog-styles-' + encodeURIComponent(url), function captureMultipleSizes (suite) {
    addCustomFunctions(suite);
    suite.setUrl(url)
      .setCaptureElements('body')
      .captureMultipleSizes();
  });
});
