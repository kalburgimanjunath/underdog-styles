var animations = require('../lib/animations');

module.exports = function() {
  document.addEventListener('click', function handleAlertCloseClick(evt) {
    // We want to find the .alert__close
    // <button class="alert__close">
    //   <span class="icon icon-close" aria-label="close"></span>
    // </button>
    var target = evt.target;
    // If the parent of the clicked element is what we are looking for then change the target
    if (!target.matches('.alert__close') && target.parentElement.matches('.alert__close')) {
      target = target.parentElement;
    }

    // If the selected target doesn't match, then stop processing this event
    if (!target.matches('.alert__close')) {
      return;
    }

    // If the expected parent element isn't correct, then stop processing this event
    if (!target.parentElement.matches('.alert')) {
      return;
    }

    // Remove the alert
    animations.fadeOut(target.parentElement);

    // Make sure this event doesn't propagate further
    evt.preventDefault();
    evt.stopPropagation();
    return false;
  });
};
