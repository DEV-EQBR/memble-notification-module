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
        '본인인증이 완료되었습니다. 이제 멤버십 구매가 가능합니다!',
      image: (data) => undefined,
      clickAction: (data) => undefined,
      titleLocKey: (data) => undefined,
      titleLocArgs: (data) => undefined,
      bodyLocKey: (data) => undefined,
      bodyLocArgs: (data) => undefined,
      data: (data) => data.customData,
    },
  },
  identityVerificationFail: {
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
        '본인인증을 실패했습니다. 설정에서 결과를 확인하고 재시도해 주세요.',
      image: (data) => undefined,
      clickAction: (data) => undefined,
      titleLocKey: (data) => undefined,
      titleLocArgs: (data) => undefined,
      bodyLocKey: (data) => undefined,
      bodyLocArgs: (data) => undefined,
      data: (data) => data.customData,
    },
  },
};

module.exports = UserTemplateKo;
