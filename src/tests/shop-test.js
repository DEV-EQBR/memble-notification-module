const axios = require('axios');
const NotificationService = require('../services/notification.service');
const config = require('../config');

const notificationService = new NotificationService();

const payload = {
  domain: 'shop',
  key: 'web3PaymentSuccess',
  language: 'ko',
  data: {
    appId: config.membleAppId,
    serviceIdentifier: 'memble',
    targets: [142803],
    platform: 'MOBILE',
    badgeType: 'UPDATE',
    customData: {
      url: 'memble://home/membership=true&ticket=true',
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