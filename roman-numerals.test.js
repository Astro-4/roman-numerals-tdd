//import { describe } from "yargs";
const romanNumConverter = require("./roman-numerals");
describe("romanNumConverter", () => {
  test('Should convert 1 to "I"', () => {
    expect(romanNumConverter(1)).toBe("I");
  });
});
