const axios = require('axios');
const NotificationService = require('../services/notification.service');
const config = require('../config');

const notificationService = new NotificationService();

const payload = {
  key: 'membershipRegistered',
  language: 'ko',
  data: {
    appId: config.membleAppId,
    serviceIdentifier: 'memble',
    targets: [142803],
    platform: 'MOBILE',
    badgeType: 'UPDATE',
  },
};

const body = notificationService.getServiceNotification(payload);

console.log(body);

axios
  .post(config.sendMessageUrl, body)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.message);
  });