import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
    var photo = await uploadPhoto().then(response => response);
    var user = await createUser().then(response => response);

    return {photo, user};
}

export default asyncUploadUser;
