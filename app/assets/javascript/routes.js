angular.module('NoteWrangler').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/notes'
    })

    .when('/notes', {
      templateUrl: 'assets/templates/notes/index.html',
      controller: 'NotesIndexController'
    })

    .when('/notes/:id/edit', {
      templateUrl: 'assets/templates/notes/edit.html',
      controller: 'NotesEditController'
    })

    .when('/notes/new', {
      templateUrl: 'assets/templates/notes/new.html',
      controller: 'NotesCreateController'
    })

    .when('/users', {
      templateUrl: 'assets/templates/users/index.html',
      controller: 'UsersIndexController'
    })

    .when('/users/:id', {
      templateUrl: 'assets/templates/users/show.html',
      controller: 'UsersShowController'
    })

    .when('', {

    })

    .otherwise({
      redirectTo: '/notes'
    });
}]);
