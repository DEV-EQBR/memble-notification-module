const ShopTemplateKo = {
  web3PaymentSuccess: {
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
      body: (data) => 'EQ pay 결제에 성공했습니다. 내 멤버십을 확인해 보세요.',
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

module.exports = ShopTemplateKo;
