import Ember from 'ember';

export default Ember.Component.extend({
  file: function() {
    return `
{
  "inboundSMSMessageList": {
    "inboundSMSMessage": [
        {
          "dateTime":"Fri Nov 22 2013 12:12:13 GMT+0000 (UTC)",
          "destinationAddress":"21581234",
          "messageId":null,
          "message":"Hello",
          "resourceURL":null,
          "senderAddress":"9171234567"
        }
    ],
    "numberOfMessagesInThisBatch":1,
    "resourceURL":null,
    "totalNumberOfPendingMessages":null
   }
}`;
  }.property()
});

