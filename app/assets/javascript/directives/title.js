angular.module("NoteWrangler").directive('title', function($timeout) {
  return function(scope, element, attrs) {
    // prevent default title from showing
    element.on('mouseover', function(e) {
      e.preventDefault();
    });

    // don't necessarily NEED to wrap "element" in $(...)
    // This is just a way to always explicitly call jQuery in case
    // Angular decides not to automatically wrap it in the future
    $timeout(function() {
      $(element).tooltip();
    });

    // cleanup to avoid memory leaks
    scope.$on('$destroy', function() {
      $(element).tooltip('destroy');
    });
  };
});
