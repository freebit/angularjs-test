import angular from 'angular';
import Home from './home/home';
import Contacts from './contacts/contacts.module'

export default angular.module('app.components',[
  Home.name,
  Contacts.name
]);