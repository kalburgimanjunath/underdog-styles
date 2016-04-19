var animations = {};

// Helper function to fade out an element
animations.fadeOut = function (elm, step) {
  // Set a default step if they did not provide one
  if (typeof step === 'undefined') {
    step = 0.05;
  }

  // If opacity is not set, set it to 1
  // DEV: opacity needs to be a number for the animation loop to work
  if (elm.style.opacity === '') {
    elm.style.opacity = 1;
  }

  // Fade out the element
  (function fade () {
    if ((elm.style.opacity -= step) <= 0) {
      elm.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  }());
};

module.exports = animations;
