import { romanNumConverter } from "./roman-numerals";
test('Should convert 1 to "I"', () => {
  expect(romanNumConverter(1)).toBe("I");
});
