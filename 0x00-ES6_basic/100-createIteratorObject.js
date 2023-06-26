export default function createIteratorObject(report) {
  const result = [];
  for (const department in report.allEmployees) {
    report.allEmployees[department].map((employee) => {
	    result.push(employee);
    });
  }
  return result;
}
