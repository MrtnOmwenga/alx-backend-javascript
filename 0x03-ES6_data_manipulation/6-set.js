const setFromArray = (array) => {
    const result = new Set();
    array.map(element => result.add(element));
    return result;
}

export default setFromArray;
