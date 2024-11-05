const PushNotificationBuilder = require('./push-notification-builder.service');
const ServiceMessageBuilder = require('./service-message-builder.service');
const UserTemplateEn = require('../templates/user-en.template');
const UserTemplateKo = require('../templates/user-ko.template');
const CouponTemplateEn = require('../templates/coupon-en.template');
const CouponTemplateKo = require('../templates/coupon-ko.template');
const ShopTemplateEn = require('../templates/shop-en.template');
const ShopTemplateKo = require('../templates/shop-ko.template');

class NotificationService {
  constructor() {
    this.templates = {
      user: {
        en: UserTemplateEn,
        ko: UserTemplateKo,
      },
      coupon: {
        en: CouponTemplateEn,
        ko: CouponTemplateKo,
      },
      shop: {
        en: ShopTemplateEn,
        ko: ShopTemplateKo,
      },
    };
  }

  getServiceNotification({ domain, key, language, data }) {
    const template = this.templates[domain][language][key];

    const payload = template.payload;
    const content = template.content;

    const payloadObject = new ServiceMessageBuilder()
      .setAppId(payload.appId(data))
      .setServiceIdentifier(payload.serviceIdentifier(data))
      .setTargets(payload.targets(data))
      .setPlatform(payload.platform(data))
      .setBadgeType(payload.badgeType(data))
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
