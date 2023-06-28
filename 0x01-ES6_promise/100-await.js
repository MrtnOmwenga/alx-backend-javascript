import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const photo = await uploadPhoto().then((response) => response)
    .catch(() => null);
  const user = await createUser().then((response) => response)
    .catch(() => null);

  return { photo, user };
};

export default asyncUploadUser;
