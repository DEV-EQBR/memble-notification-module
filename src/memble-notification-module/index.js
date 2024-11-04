const NotificationService = require('./services/notification.service');
const FcmBuilderService = require('./services/fcm-builder.service');
const CouponTemplateEn = require('./templates/coupon-en.template');
const CouponTemplateKo = require('./templates/coupon-ko.template');

const CouponTemplates = {
  en: CouponTemplateEn,
  ko: CouponTemplateKo,
};

module.exports = {
  NotificationService,
  FcmBuilderService,
  CouponTemplates,
};
