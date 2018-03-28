import template from './home.tpl.html';
import controller from './home.controller';

import './home.styl';

export default {
  template,
  controller,
  bindings:{
    data: '=data'
  }
}
