import Ember from 'ember';

export default Ember.Controller.extend({
  file: function() {
    return `
  curl -X POST "https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/5315/requests?access_token=8123sdfjk" -H "Content-Type: application/json" -d
  { "outboundSMSMessageRequest": {
    "clientCorrelator": "123456",
    "senderAddress": "tel:5315",
    "outboundSMSTextMessage": {"message": "Hello World"},
    "address": ["tel:+639171234567"]
    }
  }`;
 }.property()
});
