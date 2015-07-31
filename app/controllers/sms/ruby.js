import Ember from 'ember';

export default Ember.Controller.extend({
  file: function() {
    return `
  require 'globelabs-sms'

  sms = Globelabs::SMS.new

  options = {
    message: 'hello',
    address: '0915xxxxxx',
    sender_address: '1292',
    access_token: 'iwexlwioj23jksdf'
  }

  response = sms.send_to options`;
  }.property()

});

