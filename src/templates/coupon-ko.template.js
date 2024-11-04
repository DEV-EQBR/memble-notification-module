const CouponTemplateKo = {
  membershipRegistered: {
    key: 'membershipRegistered',
    title: (data) => '멤블',
    subtitle: (data) => undefined,
    body: (data) =>
      '멤버십 등록이 완료 되었습니다. 등록된 멤버십의 QR을 확인하세요!',
    image: (data) => undefined,
    clickAction: (data) => undefined,
    titleLocKey: (data) => undefined,
    titleLocArgs: (data) => undefined,
    bodyLocKey: (data) => undefined,
    bodyLocArgs: (data) => undefined,
    data: (data) => ({ ticketId: data.ticketId }),
  },
};

module.exports = CouponTemplateKo;
