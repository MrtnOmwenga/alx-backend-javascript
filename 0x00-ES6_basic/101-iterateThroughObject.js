export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result = result === '' ? result + employee : `${result} | ${employee}`;
  }
  return result;
}
