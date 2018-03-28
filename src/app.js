import angular from 'angular';

import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';

import ngAnimate from 'angular-animate';

import ngAria from 'angular-aria';

import Components from './components/components';

import './assets/styl/app.styl';

const AppModule = angular.module('appModule',[
  uiRouter,
  ngResource,
  ngSanitize,
  ngCookies,
  ngAnimate,
  
  Components.name
]);


AppModule.config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
});


AppModule.constant('apiKey', { 'Guitarparty-Api-Key':'7e45262f9ebd3812142fc442ae2656d364540960' });