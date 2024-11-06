class TopicMessageBuilder {
  constructor() {
    this.notification = {};
  }

  setAppId(appId) {
    this.notification.appId = appId;
    return this;
  }

  setTargets(targets) {
    this.notification.targets = targets;
    return this;
  }

  setBadgeType(badgeType) {
    this.notification.badgeType = badgeType;
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

module.exports = TopicMessageBuilder;
