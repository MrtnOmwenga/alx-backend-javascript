const updateStudentGradeByCity = (students, city, newGrades) => {
    const localStudents = students.filter(student => student.location === city);
    return localStudents.map((student) => {
	return { ...student,
		 grade: newGrades.filter((grades) => grades.studentId === student.id)[0]?.grade
	       };
    })
}

export default updateStudentGradeByCity;
