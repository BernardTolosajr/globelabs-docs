import Ember from 'ember';

export default Ember.Controller.extend({
  file: function() {
    return `
curl -X POST "https://devapi.globelabs.com.ph/payment/v1/transactions/amount?access_token=3YM8xurK_IPdhvX4OUWXQljcHTIPcQDdTESLUDI4s4g" \
 -F "amount=0.00" \
 -F "description=my application" \
 -F "endUserId=9175595283" \
 -F "referenceCode=53151000022" \
 -F "transactionOperationStatus=Charged"
  `;
  }.property()
});
