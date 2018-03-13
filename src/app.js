import angular from 'angular';

import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';

import ngAria from 'angular-aria';

import appComponent from './components/app/app.component';
import Components from './components/components';

const AppModule = angular.module('appModule',[
  uiRouter,
  ngResource,
  ngSanitize,
  ngCookies,

  Components.name
]);


AppModule.config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
});




AppModule.directive('app', appComponent);