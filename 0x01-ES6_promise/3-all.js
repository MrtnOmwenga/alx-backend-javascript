import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => {
  let body;
  let firstName;
  let lastName;

  return uploadPhoto()
    .then((data) => {
      body = data.body;
      createUser()
        .then((data) => {
          firstName = data.firstName;
          lastName = data.lastName;
          console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
};

export default handleProfileSignup;
