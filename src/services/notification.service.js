const FcmService = require('./fcm.service');
const CouponTemplateEn = require('../templates/coupon-en.template');
const CouponTemplateKo = require('../templates/coupon-ko.template');

class NotificationService {
  constructor() {
    this.fcmService = new FcmService();
    this.templates = {
      en: CouponTemplateEn,
      ko: CouponTemplateKo,
    };
  }

  createMessage(identifier, data, languageCode) {
    const templateGroup = this.templates[languageCode];
    if (!templateGroup || !templateGroup[identifier]) return null;

    const template = templateGroup[identifier];
    if (!template.condition(data)) return null;

    return {
      message: template.message(data),
      actionLink: template.actionLink(data),
    };
  }

  getServiceNotification(type, identifier, data, languageCode = 'en') {
    const messageData = this.createMessage(identifier, data, languageCode);
    if (!messageData) return null;

    return this.fcmService.buildFcmObject(data, messageData.message, 'token');
  }

  getTopicNotification(type, identifier, data, languageCode = 'en') {
    const messageData = this.createMessage(identifier, data, languageCode);
    if (!messageData) return null;

    return this.fcmService.buildFcmObject(data, messageData.message, 'topic');
  }
}

module.exports = NotificationService;
