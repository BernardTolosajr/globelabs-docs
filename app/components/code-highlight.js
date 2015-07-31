import Ember from 'ember';
import config from 'globelabs-api/config/environment';

var Highlight = require('highlight.js');

function range(start, count) {
  return Array.apply(0, new Array(count))
    .map(function (element, index) {
      return index + start;
    });
}

export default Ember.Component.extend({
  classNameBindings: ['lang'],
  hasLineNumbers: true,
  lineNumbers: Ember.computed('file', function() {
    var code = this.get('file');

    if (code) {
      return range(1, code.split('\n').length + 1);
    } else {
      return [];
    }
  }).readOnly(),

  highlight: Ember.computed('code', 'lang', function() {
    var lang = this.get('lang');
    var code = this.get('file');

    if (!lang) { throw new Error('highlight-js lang property must be set'); }
    if (lang === 'auto') {
      return Highlight.highlightAuto(code).value;
    } else {
      return Highlight.highlight(lang, code).value;
    }
  }).readOnly()
});

