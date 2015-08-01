import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('introduction');
  this.resource('sms', function() {
    this.route('ruby');
    this.route('node');
    this.route('curl');
  });

  this.resource('charging', function() {
    this.route('ruby');
    this.route('node');
    this.route('curl');
  });
});

export default Router;
