const getResponseFromAPI = () => {
  const promise = new Promise((resolve, reject) => {
    resolve(true);
    reject(new Error('fail'));
  });
  return promise;
};

export default getResponseFromAPI;
