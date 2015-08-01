import Ember from 'ember';

export default Ember.Controller.extend({
  file: function() {
    return `
  var charge = Charge(token);

  var options = {
    amount: '1.00',
    subscriberMobile: '09151111111',
    referenceCode: '001',
    description: 'hello'
  };

  charge.send(options, function(err, transaction) {
    //do things here
  });
  `;
  }.property()
});
