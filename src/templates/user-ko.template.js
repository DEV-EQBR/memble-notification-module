const UserTemplateKo = {
  identityVerificationSuccess: {
    payload: {
      appId: (data) => data.appId,
      serviceIdentifier: (data) => data.serviceIdentifier,
      targets: (data) => data.targets,
      platform: (data) => data.platform,
      badgeType: (data) => data.badgeType,
    },
    content: {
      title: (data) => '멤블',
      subtitle: (data) => undefined,
      body: (data) =>
        '본인인증이 완료 되었습니다. 이제 멤버십 구매가 가능합니다!',
      image: (data) => undefined,
      clickAction: (data) => undefined,
      titleLocKey: (data) => undefined,
      titleLocArgs: (data) => undefined,
      bodyLocKey: (data) => undefined,
      bodyLocArgs: (data) => undefined,
      data: (data) => ({ url: data.url }),
    },
  },
};

module.exports = UserTemplateKo;
