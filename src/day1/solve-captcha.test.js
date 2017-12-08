const solveCaptcha = require('./solve-captcha');

describe('Day 1 Tests', () => {
  test('does it work', async () => {
    expect(solveCaptcha()).toBe(false);
  });
});
