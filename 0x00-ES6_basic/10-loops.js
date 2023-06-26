export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (var value of array) {
    result.push(appendString + value);
  }

  return result;
}
