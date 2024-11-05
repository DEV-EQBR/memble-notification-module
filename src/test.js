const axios = require('axios');
const NotificationService = require('./services/notification.service');

require('dotenv').config();

const MEMBLE_APP_ID = process.env.MEMBLE_APP_ID;

const notificationService = new NotificationService();

const payload = {
  key: 'membershipRegistered',
  language: 'ko',
  data: {
    appId: MEMBLE_APP_ID,
    serviceIdentifier: 'memble',
    targets: [142803],
    platform: 'MOBILE',
    badgeType: 'UPDATE',
  },
};

const body = notificationService.getServiceNotification(payload);

console.log(body);

const url = 'http://localhost:3000/v1/push-notifications/send-message';
// const url = 'http://43.200.220.233:11995/v1/push-notifications/send-message';

axios
  .post(url, body)
  .then((response) => {
    console.log(response?.data);
  })
  .catch((error) => {
    console.error(error?.message);
  });
