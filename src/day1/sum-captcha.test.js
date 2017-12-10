const {
  sumCaptchaByHalfwayChar,
  sumCaptchaByNextChar,
} = require('./sum-captcha');

describe('Day 1 - Captcha Solver Tests', () => {
  describe('Sum by Next Char', () => {
    test('1122 should return 3', () => {
      expect(sumCaptchaByNextChar('1122')).toEqual(3);
    });

    test('1111 should return 4', () => {
      expect(sumCaptchaByNextChar('1111')).toEqual(4);
    });

    test('1234 should return 0', () => {
      expect(sumCaptchaByNextChar('1234')).toEqual(0);
    });

    test('91212129 should return 9', () => {
      expect(sumCaptchaByNextChar('91212129')).toEqual(9);
    });
  });

  describe('Sum by Halfway Char', () => {
    test('1212 should return 6', () => {
      expect(sumCaptchaByHalfwayChar('1212')).toEqual(6);
    });

    test('1221 should return 0', () => {
      expect(sumCaptchaByHalfwayChar('1221')).toEqual(0);
    });

    test('123425 should return 4', () => {
      expect(sumCaptchaByHalfwayChar('123425')).toEqual(4);
    });

    test('123123 should return 12', () => {
      expect(sumCaptchaByHalfwayChar('123123')).toEqual(12);
    });

    test('12131415 should return 4', () => {
      expect(sumCaptchaByHalfwayChar('12131415')).toEqual(4);
    });
  });
});
