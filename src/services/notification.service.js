const PushNotificationBuilder = require('./push-notification-builder.service');
const ServiceMessageBuilder = require('./service-message-builder.service');
const CouponTemplateEn = require('../templates/coupon-en.template');
const CouponTemplateKo = require('../templates/coupon-ko.template');

class NotificationService {
  constructor() {
    this.templates = {
      en: CouponTemplateEn,
      ko: CouponTemplateKo,
    };
  }

  getServiceNotification({ key, language, data }) {
    const templateGroup = this.templates[language];
    const template = templateGroup[key];

    const payload = template.payload;
    const content = template.content;

    const payloadObject = new ServiceMessageBuilder()
      .setAppId(payload.appId(data))
      .setServiceIdentifier(payload.serviceIdentifier(data))
      .setTargets(payload.targets(data))
      .setPlatform(payload.platform(data))
      .setBadgeType(payload.badgeType(data))
      .build();
    console.log(payloadObject);

    const pushObject = new PushNotificationBuilder()
      .setTitle(content.title(data))
      .setSubtitle(content.subtitle(data))
      .setBody(content.body(data))
      .setImage(content.image(data))
      .setClickAction(content.clickAction(data))
      .setTitleLocKey(content.titleLocKey(data))
      .setTitleLocArgs(content.titleLocArgs(data))
      .setBodyLocKey(content.bodyLocKey(data))
      .setBodyLocArgs(content.bodyLocArgs(data))
      .setData(content.data(data))
      .build();

    return {
      ...payloadObject,
      ...pushObject,
    };
  }
}

module.exports = NotificationService;
