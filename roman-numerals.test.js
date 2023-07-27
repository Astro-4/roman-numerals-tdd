const romanNumConverter = require("./roman-numerals");
describe("romanNumConverter", () => {
  test('Should convert 1 to "I"', () => {
    expect(romanNumConverter(1)).toBe("I");
  });

  test('Should convert 4 to "IV"', () => {
    expect(romanNumConverter(4)).toBe("IV");
  });

  test('Should convert 9 to "IX"', () => {
    expect(romanNumConverter(9)).toBe("IX");
  });

  test('Should convert 40 to "XL"', () => {
    expect(romanNumConverter(40)).toBe("XL");
  });

  test('Should convert 99 to "XCIX"', () => {
    expect(romanNumConverter(99)).toBe("XCIX");
  });

  test('Should convert 500 to "D"', () => {
    expect(romanNumConverter(500)).toBe("D");
  });

  test('Should convert 999 to "CMXCIX"', () => {
    expect(romanNumConverter(999)).toBe("CMXCIX");
  });

  test('Should convert 2023 to "MMXXIII"', () => {
    expect(romanNumConverter(2023)).toBe("MMXXIII");
  });
});
