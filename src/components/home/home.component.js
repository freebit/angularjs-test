import template from './home.tpl.html';
import controller from './home.controller';

import './home.styl';

export default {
  restrict: 'E',
  //scope: {},
  template,
  controller,
  //controllerAs: 'vm',
  bindToController: true
}
