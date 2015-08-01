import Ember from 'ember';

export default Ember.Controller.extend({
  file: function() {
    return `
  var SMS = require('globelabs-sms');

  var options = {
    senderAddress: '1234',
    token: 'SuCbrxI6n75bFko5ajI_lx5EK2ticlOS1VAI8fgaAy4'
  }

  var sms = SMS(options);
  sms.send({
    address: '91592341234',
    message: 'hello from npm'
  }, function(err, response) {
    console.log(response);
  });`
 }.property()
});
