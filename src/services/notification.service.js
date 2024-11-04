// const FcmService = require('./fcm.service');
const CouponTemplateEn = require('../templates/coupon-en.template');
const CouponTemplateKo = require('../templates/coupon-ko.template');

class NotificationService {
  constructor() {
    // this.fcmService = new FcmService();
    this.templates = {
      en: CouponTemplateEn,
      ko: CouponTemplateKo,
    };
  }

  getServiceNotification(key, languageCode, data) {
    const templateGroup = this.templates[languageCode];
    const template = templateGroup[key];

    // todo: delete
    console.log(template.message());
  }
}

module.exports = NotificationService;
