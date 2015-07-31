import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement() {
    $('.ui.sticky')
      .sticky({
        context: '#example1'
    });
  }
});
