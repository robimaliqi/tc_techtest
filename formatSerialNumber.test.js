const formatSerialNumber = require("./formatSerialNumber");

describe("formatSerialNumber", () => {
  it("throws error when there is an empty string entered", () => {
    expect(formatSerialNumber("", 1)).toEqual("Please enter a serial number");
  });

  it("returns a output with a single character and 1 length", () => {
    expect(formatSerialNumber("R", 1)).toEqual("R");
  });

  it("returns a output with a two characters(one lowercase) and 1 length", () => {
    expect(formatSerialNumber("Rw", 1)).toEqual("R-W");
  });

  it("returns a output with one character, a dash and 1 length", () => {
    expect(formatSerialNumber("R-", 1)).toEqual("R");
  });

  it("returns a output with two characters, a dash and 1 length", () => {
    expect(formatSerialNumber("R2-", 1)).toEqual("R-2");
  });

  it("returns a output with three characters, a dash and 1 length", () => {
    expect(formatSerialNumber("R25-", 1)).toEqual("R-2-5");
  });

  it("returns a output with eight characters, no dash, uppercase and lowercase and 4 length", () => {
    expect(formatSerialNumber("7Hnwad9Jk", 4)).toEqual("7-HNWA-D9JK");
  });

  it("returns a output with eight characters, a few dashes, uppercase and lowercase and 4 length", () => {
    expect(formatSerialNumber("6F2k-1d-0-z", 4)).toEqual("6F2K-1D0Z");
  });

  it("returns a output with eight characters, a few dashes, uppercase and lowercase and 4 length", () => {
    expect(formatSerialNumber("14k-9-b", 2)).toEqual("1-4K-9B");
  });

  it("returns a output with eight characters, a few dashes, uppercase and lowercase and 4 length", () => {
    expect(formatSerialNumber("14k-9-b", 2)).toEqual("1-4K-9B");
  });

  it("returns a error message when there is a invalid character in the input", () => {
    expect(formatSerialNumber("14k-9-@", 2)).toEqual(
      "Incorrect character entered"
    );
  });
});
