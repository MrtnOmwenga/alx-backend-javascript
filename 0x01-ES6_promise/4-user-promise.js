const signUpUser = (firstName, lastName) => (new Promise((resolve, reject) => {
  resolve({ firstName, lastName });
  reject(new Error());
}));

export default signUpUser;
