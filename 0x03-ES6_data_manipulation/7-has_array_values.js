const hasValuesFromArray = (set, array) => {
  const result = array.filter((element) => !set.has(element));
  return !(result.length > 0);
};

export default hasValuesFromArray;
