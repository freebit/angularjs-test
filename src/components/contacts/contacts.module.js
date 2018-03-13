import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import component from './contacts.component';

let contactsModule = angular.module('contacts', [
  uiRouter
])

.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('contacts', {
      url: '/contacts',
      template: '<contacts></contacts>'
    });
}])

.component('contacts', component);

export default contactsModule;