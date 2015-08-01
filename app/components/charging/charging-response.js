import Ember from 'ember';

export default Ember.Component.extend({
  file: function() {
    return `
{
 "amountTransaction": {
   "endUserId": "9175595283",
   "paymentAmount": {
     "chargingInformation": {
       "amount": "0.00",
       "currency": "PHP",
       "description": "my application"
     },
     "totalAmountCharged": "0.00"
   },
   "referenceCode": "53151000023",
   "serverReferenceCode": "528f5369b390e16a62000006",
   "resourceURL": null
 }
`;
  }.property()
});
