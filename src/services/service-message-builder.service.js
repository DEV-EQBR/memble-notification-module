class ServiceMessageBuilder {
  constructor() {
    this.notification = {};
  }

  setAppId(appId) {
    this.notification.appId = appId;
    return this;
  }

  setServiceIdentifier(serviceIdentifier) {
    this.notification.serviceIdentifier = serviceIdentifier;
    return this;
  }

  setTargets(targets) {
    this.notification.targets = targets;
    return this;
  }

  setPlatform(platform) {
    this.notification.platform = platform;
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

module.exports = ServiceMessageBuilder;
