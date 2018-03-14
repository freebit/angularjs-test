import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

import GuitarPartyService from '../../services/GuitarPartyService';

let homeModule = angular.module('home', [
  uiRouter
])

.service('GuitarPartyService', GuitarPartyService)

.config(['$stateProvider', ($stateProvider) => {

  $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
}])

.component('home', homeComponent);

export default homeModule;