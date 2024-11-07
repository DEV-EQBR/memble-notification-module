const axios = require('axios');
const NotificationService = require('../services/notification.service');
const config = require('../config');

const notificationService = new NotificationService();

const languageCode = 'ko';
const userOriginIds = [142803];
const isMembership = 1;
const isTicket = 1;

const payload = {
  domain: 'shop',
  key: 'web3PaymentSuccess',
  language: languageCode,
  data: {
    appId: config.membleAppId,
    serviceIdentifier: 'memble',
    targets: userOriginIds,
    platform: 'MOBILE',
    badgeType: 'UPDATE',
    customData: {
      url: `memble://main/${isMembership}/${isTicket}`,
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
