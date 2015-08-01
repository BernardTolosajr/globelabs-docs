import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement() {
    $('.masthead').visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        });

    $('.ui.sidebar').sidebar('attach events', '.toc.item');
  }
});

