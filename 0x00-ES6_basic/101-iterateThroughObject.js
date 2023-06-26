export default function iterateThroughObject(reportWithIterator) {
  let result = [];
  for (const employee of reportWithIterator) {
    result = result.length === 0 ? [result + employee] : [`${result} | ${employee}`];
  }
  return result;
}
