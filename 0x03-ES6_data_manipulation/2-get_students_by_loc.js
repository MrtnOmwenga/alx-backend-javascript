const getStudentsByLocation = (stdnts, city) => stdnts.filter((stdnt) => stdnt.location === city);

export default getStudentsByLocation;
