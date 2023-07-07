const getListStudentIds = (list) => {
  if (typeof list === 'object') {
    return list.map((object) => object.id);
  }
  return [];
};

export default getListStudentIds;
