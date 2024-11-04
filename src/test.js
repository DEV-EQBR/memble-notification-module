const NotificationService = require('./services/notification.service');

const notificationService = new NotificationService();

const key = 'membershipRegistered';
const languageCode = 'ko';
const data = { ticketId: 1 };

notificationService.getServiceNotification(key, languageCode, data);
