const cal = require('./calculate.js');
test('加法', () => {
  expect(cal()).toBe(3);
});