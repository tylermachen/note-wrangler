angular.module('NoteWrangler').controller('UsersIndexController', function(User, $scope) {
  $scope.users = User.query(); // gets all records
  $scope.search = {};
});
