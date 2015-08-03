import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement() {
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
  }
});

