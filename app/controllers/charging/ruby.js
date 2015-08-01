import Ember from 'ember';

export default Ember.Controller.extend({
  file: function() {
    return `
  require 'globelabs-charging'

  charging = Globelabs::Charging.new

  optiosn = {
    amount: 1.00,
    description: 'hello',
    msisdn: '091500000000',
    reference_code: '13420000001',
    access_token: 'wr29u34sdjfjaoer
  }

  response = charging.charge_to options
  `;
  }.property()
});
