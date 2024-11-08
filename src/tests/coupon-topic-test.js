const axios = require('axios');
const NotificationService = require('../services/notification.service');
const config = require('../config');

const notificationService = new NotificationService();

const languageCode = 'ko';
const baseIdentifier = 'memble_ultra_taiwan_ticket_opening_20241116';
const eventId = 1;
const eventName = 'ULTRA TAIWAN';

const topicIdentifier = notificationService.generateTopicIdentifier({
  baseIdentifier,
  language: languageCode,
});

const payload = {
  domain: 'coupon',
  key: 'ticketOpeningSoon',
  language: languageCode,
  data: {
    appId: config.membleAppId,
    targets: [topicIdentifier],
    badgeType: 'GET',
    body: {
      args: eventName,
    },
    customData: {
      url: `memble://event-datail/${eventId}`,
    },
  },
};

const body = notificationService.getTopicNotification(payload);

console.log(body);

axios
  .post(config.sendMessageUrl, body)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.message);
  });
