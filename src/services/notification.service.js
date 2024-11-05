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
      .setAppId(data.appId)
      .setServiceIdentifier(data.serviceIdentifier)
      .setTargets(data.targets)
      .setPlatform(data.platform)
      .setBadgeType(data.badgeType)
      .build();

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
