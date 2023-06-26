export default function createIteratorObject(report) {
  const result = [];
  for (const department of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[department]) {
      result.push(employee);
    }
  }
  return result;
}
