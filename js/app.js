// underdog.js
// Creates a bundle that can be included in a web page as is,
// without any additional build step required.
// Require modules here to include them in the bundle.

// Invoke the factory functions for our components.
// DEV: This is equivalent to an IIFE.
require('./components/alert')();
require('./components/carousel')();
