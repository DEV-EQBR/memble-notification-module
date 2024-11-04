const { v4: uuidv4 } = require('uuid');

class PushNotificationBuilder {
  constructor() {
    this.notification = {
      uuid: uuidv4(),
    };
  }

  setTitle(title) {
    this.notification.title = title;
    return this;
  }

  setBody(body) {
    this.notification.body = body;
    return this;
  }

  setSubtitle(subtitle) {
    this.notification.subtitle = subtitle;
    return this;
  }

  setClickAction(clickAction) {
    this.notification.clickAction = clickAction;
    return this;
  }

  setImage(image) {
    this.notification.image = image;
    return this;
  }

  setTitleLocKey(titleLocKey) {
    this.notification.titleLocKey = titleLocKey;
    return this;
  }

  setTitleLocArgs(titleLocArgs) {
    this.notification.titleLocArgs = titleLocArgs;
    return this;
  }

  setBodyLocKey(bodyLocKey) {
    this.notification.bodyLocKey = bodyLocKey;
    return this;
  }

  setBodyLocArgs(bodyLocArgs) {
    this.notification.bodyLocArgs = bodyLocArgs;
    return this;
  }

  setData(data) {
    this.notification.data = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    return this;
  }

  build() {
    return Object.fromEntries(
      Object.entries(this.notification).filter(
        ([_, value]) => value !== undefined
      )
    );
  }
}

module.exports = PushNotificationBuilder;
