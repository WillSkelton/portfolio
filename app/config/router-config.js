'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('' , '/home');
  $urlRouterProvider.when('/' , '/home');
  // $urlRouterProvider.when('/signup' , '/join#signup');
  // $urlRouterProvider.when('/login' , '/join#login');

  let states = [
    {
      name: 'projects',
      url: '/projects',
      template: require('../view/projects/projects.html'),
      controller: 'ProjectsController',
      controllerAs: 'projectsCtrl'
    },
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'resume',
      url: '/resume',
      template: require('../view/resume/resume.html'),
      controller: 'ResumeController',
      controllerAs: 'resumeCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
};
