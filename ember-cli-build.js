/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('bower_components/semantic-ui/dist/components/icon.css');
  app.import('bower_components/semantic-ui/dist/components/visibility.js');
  app.import('bower_components/semantic-ui/dist/components/sidebar.js');

  return app.toTree();
};
