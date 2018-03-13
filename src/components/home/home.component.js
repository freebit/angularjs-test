import template from './home.tpl.html';
import controller from './home.controller';

import './home.styl';

export default {
  restrict: 'EA',
  //scope: {},
  template,
  controller,
  //controllerAs: 'vm',
  bindToController: true
}
