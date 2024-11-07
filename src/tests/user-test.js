const axios = require('axios');
const NotificationService = require('../services/notification.service');
const config = require('../config');

const notificationService = new NotificationService();

const languageCode = 'ko';
const userOriginIds = [107];
const eventId = 1;

const payload = {
  domain: 'user',
  key: 'identityVerificationSuccess',
  language: languageCode,
  data: {
    appId: config.membleAppId,
    serviceIdentifier: 'memble',
    targets: userOriginIds,
    platform: 'MOBILE',
    badgeType: 'UPDATE',
    customData: {
      url: `memble://event-detail/${eventId}`,
    },
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
