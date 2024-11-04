const NotificationService = require('./services/notification.service');
const FcmService = require('./services/fcm.service');
const FcmBuilderService = require('./services/fcm-builder.service');
const CouponTemplateEn = require('./templates/coupon-en.template');
const CouponTemplateKo = require('./templates/coupon-ko.template');

const CouponTemplates = {
  en: CouponTemplateEn,
  ko: CouponTemplateKo,
};

module.exports = {
  NotificationService,
  FcmService,
  FcmBuilderService,
  CouponTemplates,
};
