const formatSerialNumber = (serial, length) => {
  const removeDash = serial.replace(/-/g, "");

  const evenInput = removeDash
    .match(new RegExp(".{1," + length + "}", "g"))
    .join("-");

  const oddOutput = removeDash
    .slice(1, removeDash.length)
    .match(new RegExp(".{1," + length + "}", "g"))
    .join("-");

  if (removeDash.length % 2 == 0) {
    return evenInput.toUpperCase();
  } else return `${serial[0]}-${oddOutput}`.toUpperCase();
};

console.log(formatSerialNumber("7Hnwad9Jk", 4)); //Output "7-HNWA-D9Jk"
console.log(formatSerialNumber("6F2k-1d-0-z", 4)); //Output "6F2K-1D0Z"
console.log(formatSerialNumber("14k-9-b", 2)); //Output "1-4K-9B"
