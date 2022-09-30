const formatSerialNumber = (serial, length) => {
  const removeDash = serial.replace(/-/g, "");

  if (removeDash.length == 1) {
    return removeDash.toUpperCase();
  } else if (removeDash.match(/[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/)) {
    return "Incorrect character entered";
  }

  const even = removeDash.length % 2 == 0;

  const prefix = (!even && removeDash[0] + "-") || "";
  var output = (even && removeDash) || removeDash.slice(1, removeDash.length);
  output = output
    .toUpperCase()
    .match(new RegExp(".{1," + length + "}", "g")) || [
    "Please enter a serial number",
  ];

  return `${prefix}${output.join("-")}`;
};

module.exports = formatSerialNumber;

console.log(formatSerialNumber("", 1)); //Output "Please enter a serial number"
console.log(formatSerialNumber("R", 1)); //Output "R"
console.log(formatSerialNumber("Rw", 1)); //Output "R-W"
console.log(formatSerialNumber("R-", 1)); //Output "R"
console.log(formatSerialNumber("R2-", 1)); //Output "R"
console.log(formatSerialNumber("R25-", 1)); //Output "R"
console.log(formatSerialNumber("7Hnwad9Jk", 4)); //Output "7-HNWA-D9J"
console.log(formatSerialNumber("6F2k-1d-0-z", 4)); //Output "6F2K-1D0Z"
console.log(formatSerialNumber("14k-9-b", 2)); //Output "1-4K-9B"
console.log(formatSerialNumber("14k-9-@", 2)); //Output "1-4K-9B"
