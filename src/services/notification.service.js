const PushNotificationBuilder = require('./push-notification-builder.service');
const CouponTemplateEn = require('../templates/coupon-en.template');
const CouponTemplateKo = require('../templates/coupon-ko.template');

class NotificationService {
  constructor() {
    this.templates = {
      en: CouponTemplateEn,
      ko: CouponTemplateKo,
    };
  }

  getServiceNotification(key, languageCode, data) {
    const templateGroup = this.templates[languageCode];
    const template = templateGroup[key];

    const pushObject = new PushNotificationBuilder()
      .setTitle(template.title(data))
      .setSubtitle(template.subtitle(data))
      .setBody(template.body(data))
      .setImage(template.image(data))
      .setClickAction(template.clickAction(data))
      .setTitleLocKey(template.titleLocKey(data))
      .setTitleLocArgs(template.titleLocArgs(data))
      .setBodyLocKey(template.bodyLocKey(data))
      .setBodyLocArgs(template.bodyLocArgs(data))
      .setData(template.data(data))
      .build();

    // todo: delete
    console.log(pushObject);
  }
}

module.exports = NotificationService;
