const FcmBuilderService = require('./fcm-builder.service');

class FcmService {
  constructor() {
    this.fcmBuilderService = new FcmBuilderService();
  }

  buildFcmObject(data, message, targetIdentifier) {
    const androidFcmObject = this.fcmBuilderService
      .androidFcmObjectBuilder()
      .setDefaultOption()
      .setNotification(
        this.fcmBuilderService
          .androidNotificationObjectBuilder()
          .setDefaultOption()
          .setContent(data.title, message)
          .setImage(data.image)
          .setClickAction(data.clickAction)
          .setTitleLocKey(data.titleLocKey)
          .setTitleLocArgs(data.titleLocArgs)
          .setBodyLocKey(data.bodyLocKey)
          .setBodyLocArgs(data.bodyLocArgs)
          .build()
      )
      .build();

    const apnsFcmObject = this.fcmBuilderService
      .apnsFcmObjectBuilder()
      .setApnsHeaders(
        this.fcmBuilderService
          .apnsHeaderObjectBuilder()
          .setDefaultOption()
          .build()
      )
      .setApnsPayload(
        this.fcmBuilderService
          .apnsPayloadObjectBuilder()
          .setAlert({
            title: data.title,
            body: message,
            'title-loc-key': data.titleLocKey,
            'title-loc-args': data.titleLocArgs,
            'loc-key': data.bodyLocKey,
            'loc-args': data.bodyLocArgs,
          })
          .setCategory(data.clickAction)
          .setSubtitle(data.subtitle)
          .build()
      )
      .build();

    const fcmObjectBuilder = this.fcmBuilderService.fcmObjectBuilder();

    if (targetIdentifier === 'token') {
      fcmObjectBuilder.setTarget(data.target, 'token');
    }
    if (targetIdentifier === 'topic') {
      fcmObjectBuilder.setTarget(data.target, 'topic');
    }

    return fcmObjectBuilder
      .setAndroid(androidFcmObject)
      .setApns(apnsFcmObject)
      .setData(data.data)
      .build();
  }
}

module.exports = FcmService;
